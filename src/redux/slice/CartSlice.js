import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    quantity: {}
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers:{
        increment: (state, {payload}) => {
            
        }
    }  
})

export const {} = cartSlice.actions
export default cartSlice.reducer