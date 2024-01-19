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
        <span className="text-sm">{`[${definition.ipa}]`}</span>
        <button>
          <HiSpeakerWave />
        </button>
      </div>
      <div className="ml-4 md:ml-8">
        <ul className="text-sm">
          {definition.meanings.map((meaning, index) => (
            <li key={index}>{`${index + 1}. ${meaning}`}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
