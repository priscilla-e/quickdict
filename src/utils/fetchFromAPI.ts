import { audioParser } from '.';
import { Definition, SearchResult } from '../types';

const API_KEY = import.meta.env.VITE_MERRIAM_WEBSTER_API_KEY;

export default async function fetchFromAPI(word: string) {
  // I know this exposes the API key, a fix would be to create a server for this project.
  // Anyhoo, knock yourself out, it's free!
  try {
    const response = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY}`
    );
    const data = await response.json();

    // NO RESULT FOUND: However, API would return an empty list or a list of
    // alternative words
    if (data.length === 0 || !data[0]?.meta) return null;

    const definitions: Definition[] = [];

    for (const res of data) {
      /* Filter for exact word match e.g if you search 'report' API also returns
      results for 'report card', our current UI does not support this, so let's get rid of them.
      
      Remove all asterisks from headword(hw) and see if it still matches our search term
      */
      const hw = res.hwi.hw.replace(/\*/g, '');
      const regex = new RegExp(`^${word}$`);
      if (!regex.test(hw)) break;

      // Parse result: This is a bit of a pain as the keys are not readable, to find out what they mean;
      // See Documentation: https://dictionaryapi.com/products/json
      const id = res.meta.uuid;
      const functionalLabel = res.fl; // e.g noun verb
      const meanings = res.shortdef;
      const mw = res.hwi.prs?.[0].mw || ''; // we pick the first pronunciation if it exists
      let audio = res.hwi.prs?.[0].sound?.audio || '';
      if (audio) {
        audio = audioParser(audio);
      }
      
      definitions.push({
        id,
        functionalLabel,
        pronunciations: {
          mw,
          audio,
        },
        meanings,
      } as Definition);
    }

    if (definitions.length > 0) {
      return { word, definitions } as SearchResult;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}
