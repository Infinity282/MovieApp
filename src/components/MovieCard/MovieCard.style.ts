import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const StyledMovieCard = styled.li({
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

export const StyledImageContainer = styled(Link)({
  height: '400px',
  width: '250px',
  '& img': {
    width: '100%',
    height: '100%',
    display: 'inline-block',
    borderRadius: '1.25rem',
  },
})
