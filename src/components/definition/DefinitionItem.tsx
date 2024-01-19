import type {Definition} from "../../types";

interface DefinitionItemProps {
    definition: Definition;
}

export default function DefinitionItem({ definition }: DefinitionItemProps) {
  return (
    <li>
      <p> {definition.partOfSpeech}</p>
      <div></div>
    </li>
  );
}