export type FetchAllMovies = {
  query: string
}

export type PagedMovies = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export type Movie = {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
export type MovieGenres = {
  genres: MovieGenre[]
}

export type MovieGenre = {
  id: number
  name: string
}