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
      invalidatesTags: [],
    }),

    getAllOrders: builder.query({
      query: () => {
        return {
          url: "order/get-orders",
          method: "GET",
        };
      },
      providesTags: ["order"],
    }),
  }),
});

export const { useGetAllOrdersQuery, useCreateOrderMutation } = userApi;
