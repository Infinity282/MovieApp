import { useState } from 'react'
import { PagedMovies } from '../../interfaces/movie'
import { movieApi } from '../../services/MovieService'
import ItemCarousel from '../Carousel/Carousel'
import { StyledHeading, StyledMovieCategories, StyledPopularMovies } from './PopularMovies.style'

const PopularMovies = () => {
  const [moviesData, setMoviesData] = useState<PagedMovies | undefined>()

  const { data, isFetching, isError } = movieApi.useFetchPopularMoviesQuery()

  console.log(data)

  return (
    <StyledPopularMovies>
      <StyledMovieCategories>
        <StyledHeading className='active'>Popular Movies</StyledHeading>
        <StyledHeading className='disabled'>Now Playing</StyledHeading>
        <StyledHeading className='disabled'>Top Rated</StyledHeading>
        <StyledHeading className='disabled'>Upcoming</StyledHeading>
      </StyledMovieCategories>
      <ItemCarousel data={data} />
    </StyledPopularMovies>
  )
}

export default PopularMovies
