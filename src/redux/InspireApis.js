import Config from "../constants/Index";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const inspireApis = createApi({
  reducerPath: "inspireApis",
  baseQuery: fetchBaseQuery({ baseUrl: Config.serverApiUrl }),
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
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = inspireApis;
