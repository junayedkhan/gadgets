import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedProduct: {}
}

export const productSlice = createSlice({
    name: "products",
    initialState,

    reducers: {
        setProduct: (state, {payload}) => {
            state.products = payload
        },

        selectedProduct: (state, {payload}) => {
            state.selectedProduct = payload
        },

        removeSelectedProduct: (state) => {
            state.selectedProduct = {}
        },
    }
})

export const { setProduct, selectedProduct, removeSelectedProduct } = productSlice.actions
export default productSlice.reducer