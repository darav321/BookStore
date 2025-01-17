import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "../redux/features/Cart/cartSlice"
import booksApi from "./features/books/booksApi"
import ordersApi from "./features/orders/ordersApi"
import favouriteReducer from "../redux/features/favourites/favouriteSlice"

export const store = configureStore({
    reducer : {
        cart : cartReducer,
        favourites : favouriteReducer,
        [booksApi.reducerPath] : booksApi.reducer,
        [ordersApi.reducerPath] : ordersApi.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware)
})
 