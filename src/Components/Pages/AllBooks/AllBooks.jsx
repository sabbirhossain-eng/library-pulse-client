import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import AllBooksCard from "./AllBooksCard";


const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const apiUrl = useApi();
  const [showAvailable, setShowAvailable] = useState(false);
  useEffect(() => {
    fetch(`${apiUrl}/book`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [apiUrl]);
  
  const handleFilterClick = () => {
    setShowAvailable(!showAvailable);
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-bold text-[#f3701d]">
        All Books
      </h2>
      <hr className="p-[1px] bg-[#000080] mb-4" />

      
      <div className="text-center mb-4">
        <label className="mr-2">
          Show only available books
          <input
            type="checkbox"
            checked={showAvailable}
            onChange={handleFilterClick}
            className="ml-2"
          />
        </label>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 place-items-center">
        {books
          .filter((book) => !showAvailable || book.quantity > 0)
          .map((book) => (
            <AllBooksCard
              key={book._id}
              book={book}
              books={books}
              setBooks={setBooks}
            ></AllBooksCard>
          ))}
      </div>
    </div>
  );
};

export default AllBooks;
