import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import ReligionCard from "./CategoriesCards/ReligionCard";

const Religion = () => {
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
      (book) => book.category === "Religion"
    );
    setBooks(filterBooks);
  }, [loadedBooks]);

  return (
    <div className="lg:flex lg:justify-around">
      <div>
        <hr className="bg-[#f3701d] p-[2px]" />
        <h2 className="text-3xl font-semibold text-[#f3701d]">Religion</h2>
      </div>
      <div className="space-y-8">
        {books.map((book) => (
          <ReligionCard key={book._id} book={book}></ReligionCard>
        ))}
      </div>
    </div>
  );
};

export default Religion;
