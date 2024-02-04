import styled from '@emotion/styled'
import { useState } from 'react'
import { PagedMovies } from '../interfaces/movie'
import { movieApi } from '../services/MovieService'
import ItemCarousel from './ItemCarousel'

const StyledPopularMovies = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

const StyledMovieCategories = styled.div({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'end',
  gap: '2rem',
  padding: '0 4rem',
})

const StyledHeading = styled.p({
  display: 'flex',
  '&.active': {
    fontSize: '3.5rem',
  },
  '&.disabled': {
    color: '#aeaeae',
    fontSize: '2.5rem',
  },
})

const PopularMovies = () => {
  // TODO Выбор фильма по популярным штукам и обработку ошибок
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
