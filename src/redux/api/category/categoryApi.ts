import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => {
        return {
          url: "/category/get-all-categories",
          method: "GET",
        };
      },
      providesTags: ["Category"],
    }),
    createCategory: builder.mutation({
      query: (data) => {
        console.log("Body", data);
        return {
          url: "/category/create-category",
          method: "POST",
          data,
        };
      },
      invalidatesTags: ["Category"],
    }),
  }),
});

export const { useGetAllCategoriesQuery, useCreateCategoryMutation } = userApi;
