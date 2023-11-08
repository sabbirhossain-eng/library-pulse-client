import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  Button,
} from "@material-tailwind/react";

const PopularContent = () => {
  const [popular, setPopular] = useState([]);
  const apiUrl = useApi();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/book`)
      .then((res) => res.json())
      .then((data) => {
        const sortedBooks = data.sort((a, b) => b.rating - a.rating);
        setPopular(sortedBooks);
      });
  }, [apiUrl]);

  const showContent = showAll ? popular : popular.slice(0, 8);
  const toggleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="lg:flex lg:justify-between space-y-4 lg:space-y-0 lg:flex-row-reverse mt-10">
    <div>
        <hr className="bg-[#f3701d] py-[2px]" />
        <h2 className="text-3xl font-semibold text-[#f3701d]">Popular Content</h2>
    </div>
      <div className="grid lg:grid-cols-2 gap-4">
        {showContent?.map((book, index) => {
          const totalStars = 5;
          const activeStars = parseInt(book.rating, 10);
          const blankStars = totalStars - activeStars;

          return (
            <Card key={index} className="w-96">
              <List>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar variant="circular" alt="candice" src={book.url} />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      {book.name}
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
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
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
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
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        ))}
                      </div>
                    </Typography>
                  </div>
                </ListItem>
              </List>
            </Card>
          );
        })}
        <div className="flex justify-center">
          {!showAll && popular.length > 8 && (
            <Button className="bg-[#f3701d]" onClick={toggleShowAll}>
              See All
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularContent;
