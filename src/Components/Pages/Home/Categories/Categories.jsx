import { useEffect, useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="grid  lg:grid-cols-4 py-20 gap-4">
      {categories.map((category) => (
        <div key={category.id} className="w-64 mx-auto  rounded-lg  dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-center">
            <img className="rounded-t-lg w-1/2" src={category.image} alt="" />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {category.name}
              </h5>
            </a>
            <Link className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#f3701d] rounded-lg hover:bg-[#000080] focus:ring-4 focus:outline-none focus:ring-[#f3701d] dark:bg-[#f3701d] dark:hover-bg-blue-700 dark:focus:ring-[#f3701d]">
              See Books
              <p className="font-bold ml-2"><AiOutlineCaretRight /></p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
