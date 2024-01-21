import type { Definition } from '../../types';
import { HiSpeakerWave } from 'react-icons/hi2';
import { playAudio } from '../../utils';

interface DefinitionItemProps {
  definition: Definition;
}

export default function DefinitionItem({ definition }: DefinitionItemProps) {
  return (
    <li className="space-y-2 border-b border-b-gray-200 py-6 ">
      <div className="flex items-center justify-start gap-2">
        <span className="font-bold">{definition.functionalLabel}</span>
        <span className="text-sm italic">{`/${definition.pronunciations.mw}/`}</span>
        {definition.pronunciations.audio && (
          <button
            className="text-xl focus:outline-none"
            onClick={() => playAudio(definition.pronunciations.audio)}
          >
            <HiSpeakerWave />
          </button>
        )}
      </div>
      <div className="ml-4 md:ml-8">
        <ul className="space-y-4 text-sm">
          {definition.meanings.map((meaning, index) => (
            <li key={index} className="flex max-w-lg gap-3 ">
              <span>{`${index + 1}.`}</span>
              <span>{meaning}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
