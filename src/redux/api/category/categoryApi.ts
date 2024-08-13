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
    updateMyProfile: builder.mutation({
      query: (data) => {
        console.log("Body", data);
        return {
          url: "/profile",
          method: "PUT",
          data,
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useGetAllCategoriesQuery } = userApi;
