import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice"
import productReducer from "./slice/ProductSlice"
import { apiSlice } from "./features/api/apiSlice";

export default configureStore ({
    reducer:{
        cart: cartReducer,
        products: productReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})