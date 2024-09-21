import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_FIREBASE } from '../firebase/database'

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:URL_FIREBASE}),
    endpoints:(builder) => ({
        getCategories: builder.query({
            query: () => "/categories.json",
            transformResponse:(response) =>{
                const data = Object.values(response)
                return data
            }
        }),
        getProductsByCategory:builder.query({
            query:(categoryName) => `/products.json?orderBy="category"&equalTo="${categoryName}"`,
            transformResponse:(response) =>{
                const data = Object.values(response)
                return data
            }
        }),
        getProductById:builder.query({
            query:(productId) => `/products/${productId}.json`,
        })
    })
})

export const {useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductByIdQuery} = shopApi
