import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from "../redux/features/books/booksApi";


// import required modules


const categories = [
  "Choose a genre",
  "Buisness",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSellers = () => {
  
  const {data : books = []} = useFetchAllBooksQuery();
  console.log(books)

  const [selectedBooks, setSelectedBooks] = useState("Choose a genre");

  const filteredBooks = selectedBooks === "Choose a genre" ? books : books.filter(book => book.category === selectedBooks.toLowerCase())
  

  return (
    <div className="py-10 px-10 pl-6 md:pl-20">
      <h2 className="text-3xl font-semibold mb-6 font-primary">Top Sellers</h2>

      <div className="mb-8 flex items-center">
        <select onChange={(e) => setSelectedBooks(e.target.value)} name="category" id="category" className="border bg-gray-200 border-black rounded-md focus:outline-none px-4 py-2">
          {categories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Navigation]}
        className="mySwiper mt-10"
      >
        {
            filteredBooks.length > 0 && filteredBooks.map((item,index) => (
                <SwiperSlide key={index}><BookCard book={item}/></SwiperSlide>
                
            ))
        }
        
        
      </Swiper>
        
      </div>
    </div>
  );
};

export default TopSellers;
