import { baseApi } from "../baseApi";

const petApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => {
        console.log("productInfo", data);
        return {
          url: `/product/create-product`,
          method: "POST",
          data,
        };
      },
      invalidatesTags: ["product"],
    }),
    getAllProducts: builder.query({
      query: (query) => {
        // const params = new URLSearchParams();
        // if (query) {
        //   query.forEach((item: { name: string; value: any }) => {
        //     params.append(item.name, item.value as any);
        //   });
        // }
        return {
          url: `/product/get-products`,
          method: "GET",
          //   params: params,
        };
      },
      transformResponse: (response: any) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["product"],
    }),
    DeleteProductById: builder.mutation({
      query: (id: string) => {
        return {
          url: `/product/delete-product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),

    // getPetById: builder.query({
    //   query: (id: string) => {
    //     return {
    //       url: `/product/${id}`,
    //       method: "GET",
    //     };
    //   },
    //   providesTags: [],
    // }),
    // updatePetById: builder.mutation({
    //   query: (data) => {
    //     console.log("petInfo", data);
    //     return {
    //       url: `/product/${data?.id}`,
    //       method: "PUT",
    //       contentType: "application/json",
    //       data: data?.petInfo,
    //     };
    //   },
    //   invalidatesTags: [],
    // }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useDeleteProductByIdMutation,
} = petApi;
