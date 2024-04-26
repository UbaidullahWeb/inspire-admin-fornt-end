import Config from "../constants/Index";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const inspireApis = createApi({
  reducerPath: 'inspireApis',
  baseQuery: fetchBaseQuery({ baseUrl: Config.serverApiUrl, }),
  endpoints: (builder) => ({
  getProducts: builder.query({
    query: () => "products?populate=*", 
  }),
  getSingleProduct: builder.query({
    query: (id) => `products/${id}`,
  }),
  addProduct: builder.mutation({
    query: (data) => ({
      url: "products",
      method: "POST",
      body: data,
    }),
  }),
  }),
})
export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
} = inspireApis;