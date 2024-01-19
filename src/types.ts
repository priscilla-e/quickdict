export type SearchResult = {
    word: string;
    definitions: Definition[]
}

export type Definition = {
    partOfSpeech: string;
    ipa?: string; // international phonetic alphabet
    audio?: string;
    meanings: Array<string>;
}