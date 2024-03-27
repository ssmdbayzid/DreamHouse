import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import favoriteItemReducer from "./features/favoriteItemSlice";

const store = configureStore({
    reducer: {
        favoriteItem: favoriteItemReducer,
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;