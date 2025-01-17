import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImgUrl } from '../utils/getImgUrl'
import { removeFromFavourites } from '../redux/features/favourites/favouriteSlice'

const Favourites = () => {
  
  const favouriteBooks = useSelector(state => state.favourites.favouriteBooks)
  const dispatch = useDispatch()
  const handleOnRemoveFav = (book) => {
    dispatch(removeFromFavourites(book))
  }
  console.log(favouriteBooks)
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Favourite Books</h1>
      
      

        {
          favouriteBooks.length === 0 ? (
            <p>No books added to Favourites</p>
          ) : (
            <div className="w-full grid grid-cols-4 gap-4 gap-y-6">
            {favouriteBooks.map((book,index) => (
              <div 
                key={book._id} 
                className="bg-gray-200 cursor-pointer shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 w-70"
              >
                <img 
                  className="w-32 h-40 object-cover rounded-md" 
                  src={getImgUrl(book.coverImage)} 
                  alt={book.title} 
                />
      
                <h2 className="text-lg font-semibold mt-3 text-gray-800 text-center">
                  {book.title}
                </h2>
    
                <p className='text-sm text-slate-600 text-center mb-3'>{book.description}</p>
      
                <div className="mt-2 text-center">
                  <p className="text-xl font-bold text-green-600">${book.newPrice}</p>
                  <p className="text-sm text-gray-500 line-through">${book.oldPrice}</p>
                </div>
    
                <button onClick={()=>handleOnRemoveFav(book)} className='btn-primary my-2'>
                  Remove from favourites
                </button>
              </div>
            
          ))}
            </div>
            
          )
        }
    </div>
  );
  
}

export default Favourites
