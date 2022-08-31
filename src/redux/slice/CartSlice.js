import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers:{
        addToCart: (state, {payload}) => {
            const date = new Date().toLocaleDateString()
            const chack = state.cartItems.find(item => {
                return item.link === payload.link
            })

            if(!chack){
                state.cartItems.push({
                    ...payload,
                    date: date,
                    quantity: payload.quantity ? payload.quantity : 1
                })
            }
        },

        increment: (state, {payload}) => {
            const data = state.cartItems.find(item => item.link === payload)
            data.quantity = data.quantity +1
        },

        decrement: (state, {payload}) => {
            const data = state.cartItems.find(item => item.link === payload)
            data.quantity = data.quantity -1
            state.cartItems = state.cartItems.filter(item => item.quantity !== 0)
        },

        remove: (state, {payload}) => {
            state.cartItems = state.cartItems.filter(item => item.link !== payload)
        },

        clearCart: (state) => {
            state.cartItems = []
        }


    }  
})

export const { addToCart, increment, decrement, remove, clearCart } = cartSlice.actions
export default cartSlice.reducer