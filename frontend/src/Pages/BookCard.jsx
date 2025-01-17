import React, { useState } from "react";
import { getImgUrl } from "../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/Cart/cartSlice";
import { Link } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { PiHeartStraightBold } from "react-icons/pi";
import { addToFavourites } from "../redux/features/favourites/favouriteSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const [fav, setFav] = useState(false);

  const handleAddToFavourites = (book) => {
    console.log(book);
    dispatch(addToFavourites(book));
    setFav(true);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgUrl(book.coverImage)}`}
              alt=""
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/books/${book._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">
            {book.description.length > 60
              ? `${book.description.slice(0, 60)}...`
              : book.description}
          </p>
          <div className="flex items-center gap-6">
            <p className="font-medium mb-5">
              {book.newPrice}{" "}
              <span className="line-through font-normal ml-2">
                {book.oldPrice}
              </span>
            </p>
            <button className="mb-4" title="Add to favourites">
              {
                fav === true ? (
                  <IoMdHeart className="size-6 cursor-pointer text-red-500" />
                ) : (
                  <PiHeartStraightBold
                    onClick={() => handleAddToFavourites(book)}
                    className="size-6 cursor-pointer text-red-500"
                  />
                )
              }
            </button>
          </div>
          <button
            onClick={() => handleAddToCart(book)}
            className="btn-primary px-6 space-x-1 flex items-center gap-1 "
          >
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
