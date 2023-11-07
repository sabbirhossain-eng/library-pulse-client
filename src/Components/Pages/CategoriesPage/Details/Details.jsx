import { useEffect, useState } from "react";
import useApi from "../../../Hooks/useApi";
import { useParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import './Details.css';

const Details = () => {
  const [book, setBooks] = useState([]);
  const apiUrl = useApi();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    email: user?.email || "",
    name: user?.displayName || "",
    date: "",
  });

  useEffect(() => {
    fetch(`${apiUrl}/book/${id}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [apiUrl, id]);

  // modal confirm

  const handleOkay = () =>{
      console.log('okay confirm')
  }

    const handleBorrow = (e) => {
      e.preventDefault();
      const newBorrow = {
        email: formData.email,
        name: formData.name,
        date: formData.date,
      };
      const hookUrl = `${apiUrl}/borrow`;

      fetch(hookUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBorrow),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Book Borrow Successfully",
              icon: "success",
              confirmButtonText: "OKay",
              customClass:{
                container: 'custom-swal-modal',
              }
              
            })
            .then(result => {
              if(result.isConfirmed){
                handleOkay();
              }
            })
          }
        });
       
      
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img src={book.url} className="object-cover w-full h-full" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-3xl antialiased font-bold leading-relaxed text-[#f3701d]">
              {book.name}
            </p>
            <p className="block font-sans text-3xl antialiased font-bold leading-relaxed text-[#000080]">
              <span className="text-gray-600 text-xl">Author: </span>{book.author}
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
          <div>
            <Button
              onClick={handleOpen}
              className="block select-none rounded-lg bg-[#f3701d] py-3 px-6 text-center align-middle font-sans text-lg capitalize font-bold text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Borrow
            </Button>
            <Dialog open={open} handler={handleOpen}>
              <form onSubmit={handleBorrow} className="space-y-6"
              style={{ zIndex: 1 }}
              >
                <DialogHeader>Please enter date of return</DialogHeader>
                <DialogBody>
                  <div className="mb-6">
                  <Input
                    type="email"
                    name="email"
                    label="Email"
                    size="lg"
                    value={formData.email}
                    required
                  />
                  </div>
                  <div className="space-y-6 sm:col-span-2">
                    <Input
                      type="text"
                      name="name"
                      label="Name"
                      size="lg"
                      value={formData.name}
                      required
                    />
                    <Input
                      type="date"
                      name="date"
                      label="Date"
                      size="lg"
                      defaultValue={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="outlined"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="block py-3 px-6 select-none rounded-lg bg-[#f3701d] text-center align-middle font-sans text-sm capitalize font-semibold text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                  >
                    Confirm
                  </Button>
                </DialogFooter>
              </form>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
