import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="grid  lg:grid-cols-4 py-20 place-items-center gap-4">
      {categories.map((category) => (
        <div 
        key={category.id}
        className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 lg:w-64 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 lg:h-64 rounded-xl bg-clip-border">
          <img
            src={category.image}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-xl antialiased font-bold leading-relaxed text-[#f3701d]">
              {category.name}
            </p>
            <Link 
            to={`/${category.name}`}
            className="block font-sans text-base antialiased font-medium leading-relaxed text-white hover:text-[#000080] bg-[#f3701d] hover:bg-slate-100 px-2 rounded-lg ">
            See Books
            </Link>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Categories;
