import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import { movieApi } from '../../services/MovieService'

const StyledMain = styled.main({
  width: '100%',
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

const StyledImageContainer = styled.div({
  width: '342px',
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'inline-block',
    borderRadius: '1.25rem',
  },
})

const StyledMovieContainer = styled.div({
  display: 'flex',
  gap: '4rem',
  padding: '0 4rem',
})

const StyledDescriptionContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '& h1': {
    margin: '0 0 0.5rem 0',
  },
  '& h2': {
    margin: '0 0 1rem 0',
  },
})

const StyledGenresContainer = styled.div({
  display: 'flex',
  gap: '1rem',
  margin: '0 0 1rem 0',
})

const MovieDetails = () => {
  const { id } = useParams()

  const { data, isFetching, isError } = movieApi.useFetchMovieQuery(id)

  console.log(data)

  return (
    <>
      <Header />
      <StyledMain>
        <StyledMovieContainer>
          <StyledImageContainer>
            <img loading='lazy' src={`${process.env.REACT_APP_IMAGE_SERVER_URL}/w500${data?.poster_path}`} alt={data?.title} />
          </StyledImageContainer>
          <StyledDescriptionContainer>
            <h1>
              {data?.title} <span>({data?.release_date.slice(0, 4)})</span>
            </h1>
            <StyledGenresContainer>
              {data?.genres.map((item) => {
                return (
                  <>
                    <p>{item.name}</p>
                  </>
                )
              })}
              <p>{data?.runtime} min</p>
            </StyledGenresContainer>
            <h2>Overview</h2>
            <p>{data?.overview}</p>
          </StyledDescriptionContainer>
          <div>
            <p>{data?.vote_average}</p>
            <p>{data?.vote_count}</p>
          </div>
        </StyledMovieContainer>
      </StyledMain>
    </>
  )
}

export default MovieDetails
