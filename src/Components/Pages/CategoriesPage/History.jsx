import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import HistoryCard from "./CategoriesCards/HistoryCard";

const History = () => {
    const [loadedBooks, setLoadedBooks] = useState([]);
    const [books, setBooks] = useState([]);
  
    const apiUrl = useApi();
  
    useEffect(() => {
      fetch(`${apiUrl}/book`)
        .then((res) => res.json())
        .then((data) => setLoadedBooks(data));
    }, [apiUrl]);
  
    useEffect(() => {
      const filterBooks = loadedBooks.filter(
        (book) => book.category === "History"
      );
      setBooks(filterBooks);
    }, [loadedBooks]);
    return (
        <div className="lg:flex lg:justify-around">
        <div>
          <hr className="bg-[#f3701d] p-[2px]" />
          <h2 className="text-3xl font-semibold text-[#f3701d]">History</h2>
        </div>
        <div className="space-y-8">
          {books.map((book) => (
            <HistoryCard key={book._id} book={book}></HistoryCard>
          ))}
        </div>
      </div>
    );
};

export default History;