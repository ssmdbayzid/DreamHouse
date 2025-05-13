import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],    
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.name === action.payload.name);
            if(itemIndex >= 0) {
                toast.error("Already added to cart")
            } else {
                state.cartItems.push(action.payload)
                toast.success("Added to cart")
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            }
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter((item) => item.name !== action.payload.name);
            toast.error("Removed from cart")
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer