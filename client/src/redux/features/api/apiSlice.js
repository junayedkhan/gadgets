import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000"}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products"
        }),
        getProduct: builder.query({
            query: (productId) => `/products/${productId}`
        }),
        getCategory: builder.query({
            query: (meta) => `/products/${meta}`
        })
    })
})

export const { useGetProductsQuery, useGetProductQuery, useGetCategoryQuery } = apiSlice;