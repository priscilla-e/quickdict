import { TbMoodEmpty } from 'react-icons/tb';

export default function NoResult() {
  return (
    <div className="mx-auto mt-10 flex min-h-96 max-w-2xl flex-col items-center justify-center gap-3 rounded-3xl bg-white px-6 py-8 text-center text-gray-400 md:p-10">
      <TbMoodEmpty className="mx-auto animate-pulse text-8xl" />
      <p className="mt-2 text-xl font-bold md:text-2xl">
        {'Sorry! No results found :('}
      </p>
      <p className="max-w-sm text-xs">
        We couldn't find the word you are loking for. 
        Please check the spelling or try a different word!
      </p>
    </div>
  );
}
