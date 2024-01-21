import DefinitionItem from './DefinitionItem';
import type { Definition } from '../../types';

interface DefinitionListProps {
  definitions: Definition[];
}

export default function DefinitionList({ definitions }: DefinitionListProps) {
  return (
    <ul className="my-4">
      {definitions.map((definition, index) => (
        <DefinitionItem key={index} definition={definition} />
      ))}
    </ul>
  );
}
