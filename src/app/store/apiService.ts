import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PACALO_API_URL,

  }),
  endpoints: () => ({}),
  reducerPath: 'apiService',
})

export default apiService
