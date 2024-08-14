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
    updateVarientById: builder.mutation({
      query: (data) => {
        console.log("petInfo", data);
        return {
          url: `/varient/update-varients/${data?.id}`,
          method: "PUT",
          contentType: "application/json",
          data: data?.updatedInfo,
        };
      },
      invalidatesTags: ["varient"],
    }),
    DeleteVarientById: builder.mutation({
      query: (id: string) => {
        return {
          url: `/varient/delete-varients/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["varient"],
    }),
  }),
});

export const {
  useGetAllVarientsQuery,
  useGetVarientByIdQuery,
  useCreateVarientMutation,
  useUpdateVarientByIdMutation,
  useDeleteVarientByIdMutation,
} = petApi;
