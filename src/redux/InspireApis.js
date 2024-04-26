import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Config } from "../constants/Index";

const TAG_TYPES = {
    products: "products",
};

export const inspireApis = createApi({
  reducerPath: "inspireApis",
  baseQuery: fetchBaseQuery({
    baseUrl: Config.serverApiUrl,
    prepareHeaders: async (headers,) => {
      headers.set("Authorization", `Bearer ${storedToken}`);
      console.log("url ", Config.serverApiUrl);
      return headers;
    },
  }),

  tagTypes: [
    TAG_TYPES.products
  ],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products", 
      providesTags: [TAG_TYPES.products],
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
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
} = inspireApis;
