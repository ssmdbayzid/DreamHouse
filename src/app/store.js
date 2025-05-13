import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import favoriteItemReducer from "./features/favoriteItemSlice";
import userReducer from "./features/userSlice";
import cartReducer from "./features/cartSlice";

const store = configureStore({
    reducer: {
        favoriteItem: favoriteItemReducer,
        user: userReducer,
        cart: cartReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;