import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonserver000.herokuapp.com"}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products"
        }),
        getProduct: builder.query({
            query: (productId) => `/products/${productId}`
        }),
        getBlogs: builder.query({
            query: () => "/blogs"
        }),
        getBlog: builder.query({
            query: (blogId) => `/blogs/${blogId}`
        })
    })
})

export const { 
    useGetProductsQuery, 
    useGetProductQuery, 
    useGetBlogsQuery, 
    useGetBlogQuery 
} = apiSlice;