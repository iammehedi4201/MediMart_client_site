import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => {
        return {
          url: "/",
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
          url: `/status/${data.id}`,
          method: "PUT",
          data: data?.updateStatusInfo,
        };
      },
      invalidatesTags: ["user"],
    }),
    changeUserRole: builder.mutation({
      query: (data) => {
        return {
          url: `/role/${data.id}`,
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
