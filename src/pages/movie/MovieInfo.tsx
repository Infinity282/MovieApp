import { useParams } from 'react-router-dom'
import Cast from '../../components/Details/Credits'
import Score from '../../components/Details/Score'
import Header from '../../components/Header/Header'
import { movieApi } from '../../services/MovieService'
import { StyledDescriptionContainer, StyledGenresContainer, StyledImageContainer, StyledMain, StyledMovieContainer, StyledScoreContainer, StyledVotesCount } from './MovieInfo.style'

const MovieDetails = () => {
  const { id } = useParams()
  const { data, isFetching, isError, isSuccess } = movieApi.useFetchMovieQuery(id)

  return (
    <>
      <Header />
      {isFetching && <div>Loading</div>}
      {isSuccess && (
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
                  return <p key={item.id}>{item.name}</p>
                })}
                <p>{data?.runtime} min</p>
              </StyledGenresContainer>
              <h2>Overview</h2>
              <p>{data?.overview}</p>
            </StyledDescriptionContainer>
            <StyledScoreContainer>
              <Score score={data?.vote_average} />
              <StyledVotesCount>{data?.vote_count} votes</StyledVotesCount>
              <Cast filmId={id} />
            </StyledScoreContainer>
          </StyledMovieContainer>
        </StyledMain>
      )}
    </>
  )
}

export default MovieDetails
