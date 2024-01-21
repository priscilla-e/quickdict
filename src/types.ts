export type SearchResult = {
    word: string;
    definitions: Definition[]
}

export type Definition = {
  id: string;
  functionalLabel: string;
  pronunciations?: {
    mw?: string; // written pronunciation in Merriam-Webster format
    audio?: string;
  };
  meanings: Array<string>;
};

export type AudioFormat = 'mp3' | 'ogg' | 'wav'