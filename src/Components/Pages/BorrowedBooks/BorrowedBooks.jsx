import { useState } from "react";
import useApi from "../../Hooks/useApi";
import { useEffect } from "react";
import BorrowedBooksCard from "./BorrowedBooksCard";

const BorrowedBooks = () => {
  const [books, setBooks] = useState([]);
  const apiUrl = useApi();

  useEffect(() => {
    fetch(`${apiUrl}/borrow`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [apiUrl]);
  console.log(books);
  return (
    <div>
      <h2 className="text-2xl text-center font-bold text-[#f3701d]">Borrowed Books</h2>
      <hr className="p-[1px] bg-[#000080] mb-4" />
      <div className="grid lg:grid-cols-3 gap-4 place-items-center">
        {
        books.map((nBook) => (
          <BorrowedBooksCard 
          key={nBook._id} 
          nBook={nBook}
          books={books}
          setBooks={setBooks}
          ></BorrowedBooksCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
