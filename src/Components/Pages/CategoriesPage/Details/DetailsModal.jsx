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
import "./Details.css";
import { useState } from "react";
import useApi from "../../../Hooks/useApi";
import PropTypes from "prop-types";

const DetailsModal = ({ book, setBook, id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const { user } = useAuth();
  const apiUrl = useApi();
 

//   modal click
const handleBorrowClick = () => {
    if (book.quantity > 0) {
      handleOpen();
    }
  };

  // today date
  const date = new Date();
  const futureDate = new Date(date);
  futureDate.setDate(date.getDate());
  const defaultValue = futureDate.toISOString().substr(0, 10);
  console.log(defaultValue);

  const [formData, setFormData] = useState({
    email: user?.email || "",
    name: user?.displayName || "",
    date: defaultValue || "",
    returnDate: "",
  });

 

  const handleBorrow = (e) => {
    e.preventDefault();
    const newBorrow = {
      email: formData.email,
      name: formData.name,
      date: formData.date,
      returnDate: formData.returnDate,
    };
    const hookUrl = `${apiUrl}/borrow`;

    fetch(hookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newBorrow, book }),
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
            customClass: {
              container: "custom-swal-modal",
            },
          });
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

   // modal confirm
   const handleConfirm = () => {
    const updatedBook = { ...book, quantity: book.quantity - 1 };
    setBook(updatedBook);

    fetch(`${apiUrl}/book/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: updatedBook.quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Quantity updated successfully:", data);
      })
      .catch((error) => {
        console.error("Error updating quantity:", error);
      });
  };


  return (
    <div>
      <Button
        onClick={handleBorrowClick}
        disabled={book.quantity === 0}
        className={`block select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-lg capitalize font-bold text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 ${
          book.quantity === 0 ? 'bg-gray-400' : 'bg-[#f3701d]'
        }`}
      >
        Borrow
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <form
          onSubmit={handleBorrow}
          className="space-y-6"
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
                value={formData.date}
                onChange={handleChange}
                required
              />
              <Input
                type="date"
                name="returnDate"
                label="Return Date"
                size="lg"
                defaultValue={formData.returnDate}
                onChange={handleChange}
                required
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="outlined" onClick={handleOpen} className="mr-1">
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              className="block py-3 px-6 select-none rounded-lg bg-[#f3701d] text-center align-middle font-sans text-sm capitalize font-semibold text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
            >
              Confirm
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};
DetailsModal.propTypes = {
  book: PropTypes.node,
  setBook: PropTypes.node,
  id: PropTypes.node,
};
export default DetailsModal;
