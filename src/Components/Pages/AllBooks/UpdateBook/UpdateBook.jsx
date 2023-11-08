import { useState } from "react";
import useApi from "../../../Hooks/useApi";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const [data, setData] = useState({});
  const apiUrl = useApi();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    url: data.url || "",
    name: data.name || "",
    category: data?.category || "",
    author: data.author || "",
    quantity: data.quantity || "",
    rating: data.rating || "",
  });

  useEffect(() => {
    fetch(`${apiUrl}/book/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [apiUrl, id]);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    const { name, author, quantity, category, rating, url } = formData;

    const bookUpdate = {
      url,
      name,
      category,
      author,
      quantity,
      rating,
    };
    console.log(bookUpdate);
    fetch(`${apiUrl}/book/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookUpdate),
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setData(data.updatedBook);
          Swal.fire({
            title: "Success!",
            text: "Book Updated Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Warning!",
            text: `${data.message}`,
            icon: "warning",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div className=" dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Update Book
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Book URL
              </label>
              <input
                type="text"
                name="url"
                id="url"
                defaultValue={data.url}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your product png url"
                required
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Book Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={data.name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Book Name"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <select
                name="category"
                id="category"
                defaultValue={data?.category}
                required
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="">Select Category</option>
                <option value="Biographies">Biographies</option>
                <option value="History">History</option>
                <option value="Religion">Religion</option>
                <option value="Business">Business</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Author Name
              </label>
              <input
                type="text"
                name="author"
                id="author"
                defaultValue={data.author}
                placeholder="Type Author Name"
                required
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Quantity of the book
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                defaultValue={data.quantity}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="1"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Rating (value 1-5)
              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                min="1.1"
                max="5.0"
                step="0.1"
                defaultValue={data.rating}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="1.1"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-[#f3701d] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};
export default UpdateBook;
