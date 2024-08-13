import { baseApi } from "../baseApi";

const petApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
      transformResponse: (data, meta) => {
        return {
          data,
          meta,
        };
      },
      providesTags: [],
    }),
    getPetById: builder.query({
      query: (id: string) => {
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
      providesTags: [],
    }),

    addPet: builder.mutation({
      query: (data) => {
        return {
          url: `/product`,
          method: "POST",
          data,
        };
      },
      invalidatesTags: [],
    }),
    updatePetById: builder.mutation({
      query: (data) => {
        console.log("petInfo", data);
        return {
          url: `/product/${data?.id}`,
          method: "PUT",
          contentType: "application/json",
          data: data?.petInfo,
        };
      },
      invalidatesTags: [],
    }),
    DeletePetById: builder.mutation({
      query: (id: string) => {
        return {
          url: `/product/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetPetByIdQuery,
  useAddPetMutation,
  useUpdatePetByIdMutation,
  useDeletePetByIdMutation,
} = petApi;
