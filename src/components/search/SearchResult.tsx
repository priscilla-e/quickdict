import DefinitionList from '../definition/DefinitionList.tsx';
import type { SearchResult } from '../../types.ts';
import { HiSpeakerWave } from 'react-icons/hi2';
import playAudio from '../../utils/playAudio.ts';

interface SearchResultProps {
  searchResult: SearchResult;
}

export default function SearchResult({ searchResult }: SearchResultProps) {
  const [firstResult] = searchResult.definitions;
  const audio = firstResult.pronunciations.audio;
  const mw = firstResult.pronunciations.mw;
  
  return (
    <div className="mx-auto mt-10 min-h-96 max-w-2xl rounded-3xl bg-white px-6 py-8 md:p-10">
      {/* Result Header Card */}
      <div className="flex items-center justify-between rounded-2xl bg-primary p-6 text-white md:py-10">
        <div>
          <span className="block text-xl font-bold md:text-3xl">
            {searchResult.word}
          </span>
          {mw && <span className="text-xs">{`[ ${mw} ]`}</span>}
        </div>
        {audio && (
          <button
            className="text-3xl duration-300 hover:scale-105 hover:text-gray-100 focus:outline-none"
            onClick={() => playAudio(audio)}
          >
            <HiSpeakerWave />
          </button>
        )}
      </div>

      {/* Result Definitions */}
      <DefinitionList definitions={searchResult.definitions} />
    </div>
  );
}
