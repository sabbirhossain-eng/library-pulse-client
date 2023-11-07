import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { PiKeyReturnFill } from "react-icons/pi";
import Swal from "sweetalert2";
import useApi from "../../Hooks/useApi";

const BorrowedBooksCard = ({ books, setBooks, nBook }) => {
  const { _id, newBorrow, book } = nBook;
  const { url, name, category } = book;
  const { date, returnDate } = newBorrow;
  const apiUrl = useApi();

  const handleReturn = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to return this book !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it !",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `${apiUrl}/borrow/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Return!", "Your Book has been returned.", "success");
              const remaining = books.filter((book) => book._id !== _id);
              setBooks(remaining);
            }
          });
      }
    });
  };

  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={url}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="space-y-4">
        <Typography className="font-semibold text-[#f3701d]">{name}</Typography>
        <Typography color="blue-gray" className="font-medium">
          {category}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          Borrowed Date: {date}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          Return Date: {returnDate}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-center">
        <Button
          onClick={() => handleReturn(_id)}
          className="flex btn bt-sm items-center gap-1 capitalize text-lg bg-[#f3701d] hover:text-[#000080]"
        >
          Return Borrowed
          <PiKeyReturnFill></PiKeyReturnFill>
        </Button>
      </CardFooter>
    </Card>
  );
};

BorrowedBooksCard.propTypes = {
  nBook: PropTypes.node,
  books: PropTypes.node,
  setBooks: PropTypes.node,
};
export default BorrowedBooksCard;
