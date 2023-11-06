import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BusinessCard = ({ book }) => {
  const { _id, url, name, category, author, rating } = book;

  const totalStars = 5;
  const activeStars = parseInt(rating, 10);
  const blankStars = totalStars - activeStars;

  return (
    <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
        <img src={url} alt="image" className="object-cover w-full h-full" />
      </div>
      <div className="p-6 grid place-content-between">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-[#000080]">
          {name}
        </h4>
        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-[#f3701d] uppercase">
          Author: {author}
        </h6>
        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Category: <span className="text-black font-semibold">{category}</span>
        </p>
        <div className="flex justify-between">
          <div className="flex items-center mt-2.5 mb-5">
            {Array.from({ length: activeStars }).map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                {
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                }
              </svg>
            ))}
            {Array.from({ length: blankStars }).map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-slate-200 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                {
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                }
              </svg>
            ))}
            <span className="bg-[#000080] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating}
            </span>
          </div>
          <div>
            <Link to={`/details/${_id}`}>
              <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white bg-[#f3701d] uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  book: PropTypes.node,
};
export default BusinessCard;
