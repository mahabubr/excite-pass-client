import { useQuery, gql } from "@apollo/client";
import Loader from "../Shared/Loader/Loader";
import Title from "../Shared/Title/Title";
import ErrorMessage from "../Shared/Title/ErrorMessage";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const GET_CATEGORY = gql`
  query Category {
    Category {
      title
      _id
      img
    }
  }
`;

const EntertainmentGuide = () => {
  const { loading, error, data } = useQuery(GET_CATEGORY);

  const Category = data?.Category;

  if (loading) {
    return <Loader />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="text-white mt-20 container w-11/12 mx-auto">
      <Title content="Entertainment Guide" />
      <div className="mt-10">
        <Slider {...settings}>
          {!error && Category && Category.length > 0 ? (
            Category.map((cat, i) => (
              <Link key={i} to={`/category/${cat._id}`}>
                <div className="p-3 relative">
                  <img
                    src={cat.img}
                    alt=""
                    className="h-[300px] w-full object-cover rounded-md brightness-[0.3] hover:brightness-50 duration-300 cursor-pointer"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="text-white font-bold">{cat.title}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <ErrorMessage />
          )}
        </Slider>
      </div>
    </div>
  );
};

export default EntertainmentGuide;
