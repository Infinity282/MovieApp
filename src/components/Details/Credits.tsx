import { movieApi } from '../../services/MovieService'
import { StyledActor, StyledCastHeading } from './Cast.style'

interface CreditsData {
  filmId: string | undefined
}

const Credits = ({ filmId }: CreditsData) => {
  const { data, isFetching, isError } = movieApi.useFetchMovieCreditsQuery(filmId)
  console.log(data)
  return (
    <>
      <StyledCastHeading>Starring</StyledCastHeading>
      <div>
        {data?.cast.slice(0, 15).map((item) => {
          return <StyledActor key={item.id}>{item.name}</StyledActor>
        })}
      </div>
    </>
  )
}

export default Credits
