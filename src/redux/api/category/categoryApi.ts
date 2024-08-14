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
    updateCategoryById: builder.mutation({
      query: (data) => {
        console.log("productInfo", data);
        return {
          url: `/category/update-category/${data?.id}`,
          method: "PUT",
          contentType: "application/json",
          data: data?.updatedInfo,
        };
      },
      invalidatesTags: ["Category"],
    }),
    getCategoryById: builder.query({
      query: (id: string) => {
        return {
          url: `/category/get-category/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Category"],
    }),
    DeleteCategoryById: builder.mutation({
      query: (id: string) => {
        return {
          url: `/category/delete-category/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryByIdMutation,
  useDeleteCategoryByIdMutation,
  useGetCategoryByIdQuery,
} = userApi;
