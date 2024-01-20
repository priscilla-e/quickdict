import { AudioFormat } from "../types";

/**
 * Audio Parser for Merriam-Webster's API, following their audio path rules.
 * 
 * @see {@link https://dictionaryapi.com/products/json#sec-2.prs}
 * 
 * @param baseFileName The base name of the audio file name without the extension.
 * @param format The required audio format (e.g 'mp3', 'wav' or 'ogg').  Defaults to mp3.
 * @returns The constructed URL to the audio file in Merriam-Webster's Media Servers.
 */
export default function audioParser(baseFileName: string, format: AudioFormat = 'mp3') {
    let subDirectory = 'audio'

    if (baseFileName.startsWith('bix')) {
        subDirectory = 'bix';
    }
    else if (baseFileName.startsWith('gg')) {
        subDirectory = 'gg';
    }
    else if (/^[^a-zA-Z]/.test(baseFileName)) {
        // if file doesn't start with an alphabet
        subDirectory = 'number';
    }

    const audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subDirectory}/${baseFileName}.${format}`;

    return audioUrl;
}