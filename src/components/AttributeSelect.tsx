import { FC, SelectHTMLAttributes } from "react";

interface Props extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onSelect" | "onChange"> {
  onSelect: (attribute: string) => void;
  attributes: string[];
}

export const AttributeSelect: FC<Props> = ({ value, onSelect, attributes }, props) => {
  const handleChange = (attribute: string) => {
    onSelect(attribute);
  };

  return (
    <div className={"col w-full sm:w-[unset]"}>
      <label htmlFor="Attribute">Attribute</label>
      <select
        {...props}
        className={"input"}
        value={value}
        onChange={({ target: { value } }) => handleChange(value)}
      >
        <option value={"search"}>Choose attribute</option>
        {attributes?.map((attribute) => (
          <option key={attribute}>{attribute}</option>
        ))}
      </select>
    </div>
  );
};
