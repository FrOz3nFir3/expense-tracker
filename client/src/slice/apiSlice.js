// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: "api",

  // TODO: in development mode api url (nodejs server is on 3000 port) so http://localhost:3000/api otherwise /api
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),

  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    postRegisterUser: builder.mutation({
      query: (user) => ({
        url: "/user/register",
        method: "POST",
        body: user,
      }),
    }),

    postLoginUser: builder.mutation({
      query: (user) => ({
        url: "/user/login",
        method: "POST",
        body: user,
      }),
    }),

    getAuthDetails: builder.query({
      query: () => `/user/authed`,
    }),

    patchUpdateUser: builder.mutation({
      query: (user) => ({
        url: "/user",
        method: "PATCH",
        body: user,
      }),
    }),

    postLogoutUser: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  usePostRegisterUserMutation,
  usePostLoginUserMutation,
  useGetAuthDetailsQuery,
  usePatchUpdateUserMutation,
  usePostLogoutUserMutation,
} = apiSlice;
