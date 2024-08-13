import { baseApi } from "../baseApi";

const petApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllVarients: builder.query({
      query: (query) => {
        return {
          url: `/varient/get-varients`,
          method: "GET",
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
    getVarientById: builder.query({
      query: (id: string) => {
        return {
          url: `/varient/${id}`,
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
  useGetAllVarientsQuery,
  useGetVarientByIdQuery,
  useAddPetMutation,
  useUpdatePetByIdMutation,
  useDeletePetByIdMutation,
} = petApi;
