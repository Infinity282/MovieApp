import styled from '@emotion/styled'
import Header from '../components/Header/Header'
import PopularMovies from '../components/PopularMovies/PopularMovies'
// import { MovieService } from '../services/MovieService'

const StyledMain = styled.main({
  width: '100%',
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

const Home = () => {
  // const dispatch = useAppDispatch()

  // const { genres, isFetching, error } = useAppSelector((state) => state.genresSliceReducer)

  // useEffect(() => {
  //   dispatch(MovieService.fetchGenres())
  // }, [])

  return (
    <>
      <Header />
      <StyledMain>
        <PopularMovies />
        <PopularMovies />
        <PopularMovies />
      </StyledMain>
      {/* {genres.map((item) => {
        return <p key={item.id}>{item.name}</p>
      })} */}
    </>
  )
}

export default Home
