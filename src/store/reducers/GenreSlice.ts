// import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// import { Genres } from '../../interfaces/movie'
// // import { MovieService } from '../../services/MovieService'

// interface SearchState {
//   genres: Genres[]
//   isFetching: boolean
//   error: null | string
// }

// const initialState: SearchState = {
//   genres: [],
//   isFetching: false,
//   error: null,
// }

// export const genresSlice = createSlice({
//   name: 'genresSlice',
//   initialState: initialState,
//   reducers: {
//     genresFetching: (state) => {
//       return {
//         ...state,
//         isFetching: true,
//       }
//     },
//     // genresFetchingSuccess: (state, action: PayloadAction<MovieGenres>) => {
//     //   return {
//     //     ...state,
//     //     isFetching: false,
//     //     error: null,
//     //     genres: action.payload.genres,
//     //   }
//     // },
//     genresFetchingError: (state, action: PayloadAction<string>) => {
//       return {
//         ...state,
//         isFetching: false,
//         error: action.payload,
//       }
//     },
//     resetState: () => {
//       return initialState
//     },
//   },
//   // extraReducers: (builder) => {
//   //   builder.addCase(MovieService.fetchGenres.fulfilled, (state, action: PayloadAction<MovieGenres>) => {
//   //     return {
//   //       ...state,
//   //       isFetching: false,
//   //       error: null,
//   //       genres: action.payload.genres,
//   //     }
//   //   })
//   //   builder.addCase(MovieService.fetchGenres.rejected, (state, action: PayloadAction<string | any>) => {
//   //     return {
//   //       ...state,
//   //       isFetching: false,
//   //       error: action.payload,
//   //     }
//   //   })
//   //   builder.addCase(MovieService.fetchGenres.pending, (state) => {
//   //     return {
//   //       ...state,
//   //       isFetching: true,
//   //     }
//   //   })
//   // },
// })

// export const { genresFetching, genresFetchingError, resetState } = genresSlice.actions

// export default genresSlice.reducer

export {}
