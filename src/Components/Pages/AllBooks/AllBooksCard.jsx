import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
  } from "@material-tailwind/react";
  import PropTypes from "prop-types";

const AllBooksCard = ({ book }) => {
  const { url, name, author, category, quantity, rating } = book;

  const totalStars = 5;
  const activeStars = parseInt(rating, 10);
  const blankStars = totalStars - activeStars;

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
      <div className="mb-2 flex items-center justify-between">
        <Typography className="font-semibold text-[#f3701d]">{name}</Typography>
        <Typography color="blue-gray" className="font-medium">
        <div className="flex items-center mt-2.5 mb-5">
            {Array.from({ length: activeStars }).map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-[#f3701d] mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                {
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                }
              </svg>
            ))}
            {Array.from({ length: blankStars }).map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-slate-200 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                {
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                }
              </svg>
            ))}
          </div>
        </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
         Author : {author} 
        </Typography>
        <div className="mb-2 flex items-center">
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 mr-20"
        >
          Category: {category}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          Quantity: {quantity}
        </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0 flex justify-center">
        <Button
          className="flex btn bt-sm items-center gap-1 capitalize text-lg bg-[#f3701d] hover:text-[#000080]"
        >
          Update
        </Button>
      </CardFooter>
    </Card>
  );
};

AllBooksCard.propTypes={
    book: PropTypes.node
}
export default AllBooksCard;


