import { Genre, ProductionCompany, ProductionCountry, SpokenLanguage } from './description'

export interface FetchAllMovies {
  query: string
}

export interface PagedMovies {
  page: number
  results: ShortMovie[]
  total_pages: number
  total_results: number
}

export interface ShortMovie {
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

export interface Movie {
  adult: boolean
  backdrop_path: string
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
