import type {Definition} from "../../types";

interface DefinitionItemProps {
    definition: Definition;
}

export default function DefinitionItem({ definition }: DefinitionItemProps) {
  return (
    <li>
      <p>Verb</p>
      <div></div>
    </li>
  );
}