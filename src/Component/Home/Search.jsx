import { Button, Option, Select } from "@material-tailwind/react";

const Search = () => {
  return (
    <div className="bg-white container mx-auto w-11/12 p-8 rounded-lg  ">
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-10">
        <Select label="Select Category">
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
        <Select label="Select Location">
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
        <Button color="gray">Search</Button>
      </div>
      <div className="mt-10 grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-4 md:place-items-center">
        <div>
          <p className="font-bold text-secondary text-2xl">500+</p>
          <p className="text-gray-600">Upcoming Events</p>
        </div>
        <div>
          <p className="font-bold text-secondary text-2xl">10M+</p>
          <p className="text-gray-600">Ticket Sold</p>
        </div>
        <div>
          <p className="font-bold text-secondary text-2xl">560K+</p>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div>
          <p className="font-bold text-secondary text-2xl">10Y+</p>
          <p className="text-gray-600">Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
