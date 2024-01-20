import { AudioFormat } from "../types";

/**
 * Audio Parser for Merriam-Webster's API, following their audio path rules.
 * 
 * Reference: https://dictionaryapi.com/products/json#sec-2.prs
 * 
 * @param baseFileName The base name of the audio file name without the extension.
 * @param format The required audio format (e.g 'mp3', 'wav' or 'ogg').  Defaults to mp3.
 * @returns {string} The constructed URL to the audio file in Merriam-Webster's Media Servers.
 */
export default function audioParser(baseFileName: string, format: AudioFormat = 'mp3') {
    let subdirectory = 'audio'

    if (baseFileName.startsWith('bix')) {
        subdirectory = 'bix'
    }
    else if (baseFileName.startsWith('gg')) {
        subdirectory = 'gg';
    }
    else if (/^[^a-zA-Z]/.test(baseFileName)) {
        // if file doesn't start with an alphabet
        subdirectory = 'number';
    }

    const audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdirectory}/${baseFileName}.${format}`;

    return audioUrl;
}