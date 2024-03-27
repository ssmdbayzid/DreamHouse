import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
    favoriteItems: localStorage.getItem("favoriteItems") ? JSON.parse(localStorage.getItem("favoriteItems")) : [],    
}

const favoriteItemSlice = createSlice({
    name:"favoriteItem",
    initialState,
    reducers: {
    // Add to favorite item
    addToFavorite(state, action){
        const itemIndex = state.favoriteItems.findIndex((item)=> item.title === action.payload.title);
        if(itemIndex >= 0){
            toast.error("Already added to favorite item")
        }else{
            state.favoriteItems.push(action.payload)
            toast.success("Added to favorite item")

             // Updated data store to localStorage
            localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems))

        }
    },
    removeFavoriteItem(state, action){
        state.favoriteItems = state.favoriteItems.filter((item)=> item.title !== action.payload.title);
        toast.error("Remove from favorite item")

         // Updated data store to localStorage
        localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems))

    }
    }
})

export const {addToFavorite, removeFavoriteItem} = favoriteItemSlice.actions;
export default favoriteItemSlice.reducer