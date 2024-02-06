import { forwardRef } from 'react'
import { ShortMovie } from '../../interfaces/movie'
import { StyledImageContainer, StyledMovieCard } from './MovieCard.style'

interface MovieCardData {
  data: ShortMovie
}

const MovieCard = forwardRef<HTMLLIElement | null, MovieCardData>(function MovieCard({ data }, ref) {
  return (
    <StyledMovieCard ref={ref}>
      <StyledImageContainer to={`/movie/${data.id}`}>
        <img loading='lazy' src={`${process.env.REACT_APP_IMAGE_SERVER_URL}/w342${data.poster_path}`} alt={data.title} />
      </StyledImageContainer>
    </StyledMovieCard>
  )
})

export default MovieCard
