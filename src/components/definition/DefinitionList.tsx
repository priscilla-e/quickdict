import { Definition } from '../../types';
import DefinitionItem from './DefinitionItem';

interface DefinitionListProps {
  definitions: Definition[];
}

export default function DefinitionList({ definitions }: DefinitionListProps) {
  return (
    <ul className="mt-4 bg-red-200">
      {definitions.map((definition, index) => (
        <DefinitionItem key={index} definition={definition} />
      ))}
    </ul>
  );
}
