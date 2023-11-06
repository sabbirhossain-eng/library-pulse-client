import { useEffect, useState } from "react";
import useApi from "../../../Hooks/useApi";
import { useParams } from "react-router-dom";

const Details = () => {
  const [book, setBooks] = useState([]);
  const apiUrl = useApi();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${apiUrl}/book/${id}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [apiUrl, id]);

  console.log(book);

  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img
            src={book.url}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-3xl antialiased font-bold leading-relaxed text-[#f3701d]">
              {book.name}
            </p>
            <p className="block font-sans text-3xl antialiased font-bold leading-relaxed text-[#000080]">
              {book.author}
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {book.description}
          </p>
        </div>
        <div className="p-6 pt-0 flex justify-around">
          <button
            className="block select-none rounded-lg bg-[#f3701d] py-3 px-6 text-center align-middle font-sans text-lg capitalize font-bold text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Read
          </button>
          <button
            className="block select-none rounded-lg bg-[#f3701d] py-3 px-6 text-center align-middle font-sans text-lg capitalize font-bold text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Borrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
