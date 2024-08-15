import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => {
        return {
          url: "/order/create-order",
          method: "post",
          data: data,
        };
      },
      invalidatesTags: ["order"],
    }),

    getAllOrders: builder.query({
      query: () => {
        return {
          url: "/order/get-orders",
          method: "GET",
        };
      },
      providesTags: ["order"],
    }),
    getOrderById: builder.query({
      query: (id: string) => {
        console.log("id", id);

        return {
          url: `/order/get-order/${id}`,
          method: "GET",
        };
      },
      providesTags: ["order"],
    }),
    getUserOrdersById: builder.query({
      query: (id: string) => {
        console.log("id", id);
        return {
          url: `/order/get-user-orders/${id}`,
          method: "GET",
        };
      },
      providesTags: ["order"],
    }),
    updateOrderById: builder.mutation({
      query: (data) => {
        return {
          url: `/order/update-order/${data?.id}`,
          method: "PUT",
          contentType: "application/json",
          data: data?.updateStatus,
        };
      },
      invalidatesTags: ["order"],
    }),
    DeleteOrderById: builder.mutation({
      query: (data) => {
        return {
          url: `/order/delete-order/${data.id}`,
          method: "DELETE",
          data: data?.updateStatusInfo,
        };
      },
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useCreateOrderMutation,
  useGetOrderByIdQuery,
  useUpdateOrderByIdMutation,
  useDeleteOrderByIdMutation,
  useGetUserOrdersByIdQuery,
} = userApi;
