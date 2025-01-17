import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favouriteBooks : []
}

const favouriteSlice = createSlice({
    name : 'favourites',
    initialState : initialState,
    reducers : {
        addToFavourites : (state, action) => {
            const existingItem = state.favouriteBooks.find(item => item._id === action.payload._id)
            if(!existingItem)
            {
                state.favouriteBooks.push(action.payload)
            }
        },
        removeFromFavourites : (state, action) => {
            state.favouriteBooks = state.favouriteBooks.filter(item => item._id !== action.payload._id)
        },
        clearFavourites : (state, action) => {
            state.favouriteBooks = []
        }
    }
})

export const {addToFavourites, removeFromFavourites, clearFavourites} = favouriteSlice.actions
export default favouriteSlice.reducer