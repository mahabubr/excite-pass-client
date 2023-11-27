import { Button, Option, Select } from "@material-tailwind/react";
import { useQuery, gql } from "@apollo/client";
import Loader from "../Shared/Loader/Loader";
import { useNavigate } from "react-router-dom";

const GET_CATEGORY = gql`
  query Category {
    Category {
      title
      _id
      img
    }
  }
`;

const Search = () => {
  const { loading, data } = useQuery(GET_CATEGORY);
  const router = useNavigate();

  const category = data?.Category;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-white container mx-auto w-11/12 p-8 rounded-lg  ">
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-10">
        <Select label="Select Category">
          {category?.map((category, i) => (
            <Option onClick={() => router(`/category/${category._id}`)} key={i}>
              {category.title}
            </Option>
          ))}
        </Select>
        <Select label="Select Location">
          <Option>United State</Option>
          <Option>Mexico</Option>
          <Option>Russia</Option>
          <Option>Poland</Option>
          <Option>Saudi Arabia</Option>
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
