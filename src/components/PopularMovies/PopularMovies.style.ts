import styled from '@emotion/styled'

export const StyledPopularMovies = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

export const StyledMovieCategories = styled.div({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'end',
  gap: '2rem',
  padding: '0 4rem',
})

export const StyledHeading = styled.p({
  display: 'flex',
  '&.active': {
    fontSize: '3.5rem',
  },
  '&.disabled': {
    color: '#aeaeae',
    fontSize: '2.5rem',
  },
})
