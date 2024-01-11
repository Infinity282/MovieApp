import styled from '@emotion/styled'
import { FC, Fragment, useEffect } from 'react'
import Header from '../components/Header'
import PopularMovies from '../components/PopularMovies'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { MovieService } from '../services/MovieService'

const StyledMain = styled.main({
  width: '100%',
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

const Home: FC = () => {
  const dispatch = useAppDispatch()

  const { genres, isFetching, error } = useAppSelector((state) => state.genresSliceReducer)

  useEffect(() => {
    dispatch(MovieService.fetchGenres())
  }, [])

  return (
    <Fragment>
      <Header />
      <StyledMain>
        <PopularMovies />
        <PopularMovies />
        <PopularMovies />
      </StyledMain>
      {/* {genres.map((item) => {
        return <p key={item.id}>{item.name}</p>
      })} */}
    </Fragment>
  )
}

export default Home
