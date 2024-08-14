import { baseApi } from "../baseApi";

const petApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createVarient: builder.mutation({
      query: (data) => {
        return {
          url: `/varient/create-varients`,
          method: "POST",
          data,
        };
      },
      invalidatesTags: ["varient"],
    }),
    getAllVarients: builder.query({
      query: (query) => {
        return {
          url: `/varient/get-varients`,
          method: "GET",
        };
      },
      providesTags: ["varient"],
    }),
    getVarientById: builder.query({
      query: (id: string) => {
        return {
          url: `/varient/${id}`,
          method: "GET",
        };
      },
      providesTags: ["varient"],
    }),
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
    // DeletePetById: builder.mutation({
    //   query: (id: string) => {
    //     return {
    //       url: `/product/${id}`,
    //       method: "DELETE",
    //     };
    //   },
    // }),
  }),
});

export const {
  useGetAllVarientsQuery,
  useGetVarientByIdQuery,
  useCreateVarientMutation,
} = petApi;
