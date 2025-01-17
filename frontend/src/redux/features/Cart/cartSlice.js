import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name : 'cart',
    initialState : initialState,
    reducers: {
        addToCart : (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id)
            if(!existingItem) {
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product Added to the Cart",
                    showConfirmButton: true,
                    connfirmButtonText: "Home Page",
                    showCancelButton: true,
                    cancelButtonColor: "#3085d6",
                    timer: 1000
                  }).then((result)=>{
                    if(result.isConfirmed) {
                        navigate("/home")
                    }
                  }

                  );
            } else (
                Swal.fire({
                    title: "Already Added to the Cart",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK!"
            })
            )
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
        },
        clearCart : (state) => {
            state.cartItems = []
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer