import { Option, Select } from "@material-tailwind/react";

const Search = () => {
  return (
    <div className="bg-white container mx-auto w-11/12 p-8 rounded-lg">
      <Select label="Select Category">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>
  );
};

export default Search;
