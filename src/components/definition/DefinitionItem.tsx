import type { Definition } from '../../types';
import { HiSpeakerWave } from 'react-icons/hi2';

interface DefinitionItemProps {
  definition: Definition;
}

export default function DefinitionItem({ definition }: DefinitionItemProps) {
  return (
    <li className="space-y-2">
      <div className="flex items-center justify-start gap-2">
        <span className="font-bold">{definition.partOfSpeech}</span>
        <span className="text-sm italic">{`/${definition.ipa}/`}</span>
        <button className='text-xl focus:outline-none' onClick={() => alert('TODO: playAudio')}>
          <HiSpeakerWave />
        </button>
      </div>
      <div className="ml-4 md:ml-8">
        <ul className="text-sm space-y-4">
          {definition.meanings.map((meaning, index) => (
            <li key={index} className="flex gap-3 max-w-lg">
              <span>{`${index + 1}.`}</span>
              <span>{meaning}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
