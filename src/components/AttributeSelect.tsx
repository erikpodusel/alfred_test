import { FC } from "react";

interface Props {
  onSelect: (attribute: string) => void;
  attributes: string[];
  value: string | undefined;
}

export const AttributeSelect: FC<Props> = ({ value, onSelect, attributes }, props) => {
  return (
    <div className={"col w-full sm:w-[unset]"}>
      <label htmlFor="Attribute">Attribute</label>
      <select
        {...props}
        className={"input"}
        value={value}
        onChange={({ target: { value } }) => onSelect(value)}
      >
        <option value={"search"}>Choose attribute</option>
        {attributes?.map((attribute) => (
          <option key={attribute}>{attribute}</option>
        ))}
      </select>
    </div>
  );
};
