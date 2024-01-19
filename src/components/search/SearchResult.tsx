import DefinitionList from '../definition/DefinitionList.tsx'
import type { SearchResult } from '../../types.ts';
import { HiSpeakerWave } from 'react-icons/hi2';

interface SearchResultProps {
  searchResult: SearchResult;
}

export default function SearchResult({searchResult}: SearchResultProps ) {
  return (
    <div className="mx-auto mt-10 min-h-96 max-w-2xl rounded-3xl bg-white px-6 py-8 md:p-10">
      <div className="flex items-center justify-between rounded-2xl bg-primary p-6 text-white md:py-10">
        <div>
          <span className="block text-lg font-bold md:text-2xl">
            Development
          </span>
          <span className="text-xs">{`[ di-ˈve-ləp-mənt ]`}</span>
        </div>
        <button className="text-3xl duration-300 hover:scale-105 hover:text-gray-100 focus:outline-none">
          <HiSpeakerWave />
        </button>
      </div>

      <DefinitionList definitions={searchResult.definitions} />
    </div>
  );
}
