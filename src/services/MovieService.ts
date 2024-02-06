import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Credits } from '../interfaces/description'
import { Movie, PagedMovies } from '../interfaces/movie'

// const fetchGenres = createAsyncThunk('genres/fetch', async (_, thunkApi) => {
//   const response = await ServerService.getFromServer<MovieGenres>('genre/movie/list')
//   if (response) {
//     if ('status_message' in response) {
//       return thunkApi.rejectWithValue(response.status_message)
//     } else {
//       return response
//     }
//   } else {
//     return thunkApi.rejectWithValue(DefaultMessages.unknown)
//   }
// })

// export const MovieService = {
//   async searchMovies(query: FetchAllMovies) {
//     const response = await ServerService.getFromServer<PagedMovies>('search/movie', query)
//     return response
//   },
//   fetchGenres,
// }

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_URL,
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json')
      headers.set('Authorization', `Bearer ${process.env.REACT_APP_SERVER_API_KEY}`)
      return headers
    },
  }),
  endpoints: (build) => ({
    fetchPopularMovies: build.query<PagedMovies, void>({
      query: () => ({
        url: '/movie/popular',
      }),
    }),
    fetchNowPlayingMovies: build.query<PagedMovies, void>({
      query: () => ({
        url: '/movie/now_playing',
      }),
    }),
    fetchTopRatedMovies: build.query<PagedMovies, void>({
      query: () => ({
        url: '/movie/top_rated',
      }),
    }),
    fetchUpcomingMovies: build.query<PagedMovies, void>({
      query: () => ({
        url: '/movie/upcoming',
      }),
    }),
    fetchMovie: build.query<Movie, string | undefined>({
      query: (id: string | undefined) => ({
        url: `/movie/${id}`,
      }),
    }),
    fetchMovieCredits: build.query<Credits, string | undefined>({
      query: (id: string | undefined) => ({
        url: `/movie/${id}/credits`,
      }),
    }),
  }),
})
