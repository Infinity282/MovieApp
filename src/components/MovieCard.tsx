import styled from '@emotion/styled'
import { FC, MutableRefObject } from 'react'
import { Link } from 'react-router-dom'
import { Movie } from '../interfaces/movie'

const StyledMovieCard = styled.li({
  display: 'flex',
  flexDirection: 'column',
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '300ms',
  borderRadius: '1.25rem',
  ':hover': {
    transform: 'scale(1.1)',
    boxShadow: '0px 0px 5px 10px rgba(0, 0, 0, 0.55)',
  },
})

const StyledImageContainer = styled(Link)({
  height: '400px',
  width: '250px',
})

const StyledImage = styled.img({
  width: '100%',
  height: '100%',
  display: 'inline-block',
  borderRadius: '1.25rem',
})

interface MovieCardData {
  data: Movie
  blockRef?: MutableRefObject<HTMLLIElement | null>
}

const MovieCard: FC<MovieCardData> = ({ data, blockRef }) => {
  return (
    <StyledMovieCard ref={blockRef}>
      <StyledImageContainer to={`/movie/${data.id}`}>
        <StyledImage loading='lazy' src={`${process.env.REACT_APP_IMAGE_SERVER_URL}/w342${data.poster_path}`} alt={data.title} />
      </StyledImageContainer>
    </StyledMovieCard>
  )
}

export default MovieCard
