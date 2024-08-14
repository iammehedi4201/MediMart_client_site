import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => {
        return {
          url: "/user/get-users",
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    getMyProfile: builder.query({
      query: (query) => {
        console.log("Query", query);
        return {
          url: `/user/get-user-profile?email=${query}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
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
      invalidatesTags: ["user"],
    }),
    ChangeUserStatus: builder.mutation({
      query: (data) => {
        return {
          url: `/user/delete-user/${data.id}`,
          method: "DELETE",
          data: data?.updateStatusInfo,
        };
      },
      invalidatesTags: ["user"],
    }),
    changeUserRole: builder.mutation({
      query: (data) => {
        return {
          url: `/user/change-role/${data.id}`,
          method: "PUT",
          data: data?.role,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
  useChangeUserStatusMutation,
  useChangeUserRoleMutation,
} = userApi;
