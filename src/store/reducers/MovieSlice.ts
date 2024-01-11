import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Movie, PagedMovies } from '../../interfaces/movie'

interface SearchState {
  results: Movie[]
  totalResults: number
  totalPages: number
  isFetching: boolean
  error: null | string
}

const initialState: SearchState = {
  results: [],
  totalResults: 0,
  totalPages: 0,
  isFetching: false,
  error: null,
}

export const searchMovieSlice = createSlice({
  name: 'searchMovieSlice',
  initialState: initialState,
  reducers: {
    moviesFetching: (state) => {
      return {
        ...state,
        isFetching: true,
      }
    },
    moviesFetchingSuccess: (state, action: PayloadAction<PagedMovies>) => {
      return {
        ...state,
        isFetching: false,
        error: null,
        results: action.payload.results,
        totalResults: action.payload.total_results,
        page: action.payload.page,
        totalPages: action.payload.total_pages,
      }
    },
    moviesFetchingError: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    },
    resetState: () => {
      return initialState
    },
  },
})

export const { moviesFetching, moviesFetchingSuccess, moviesFetchingError, resetState } = searchMovieSlice.actions

export default searchMovieSlice.reducer
