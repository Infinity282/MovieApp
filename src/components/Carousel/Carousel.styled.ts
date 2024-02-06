import styled from '@emotion/styled'

export const StyledMovieCarousel = styled.div({
  display: 'flex',
  position: 'relative',
})

export const StyledCarouselButton = styled.button({
  display: 'flex',
  position: 'absolute',
  top: '2rem',
  zIndex: '20',
  height: '400px',
  width: '125px',
  border: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'inherit',
  svg: {
    color: 'white',
    width: '3rem',
    height: '3rem',
  },
  ':hover': {
    cursor: 'pointer',
  },
  '&.first': {
    left: '0',
  },
  '&.second': {
    left: 'calc(100% - 125px)',
  },
})

export const StyledCarouselCardContainer = styled.ul({
  display: 'flex',
  padding: '2rem 1rem',
  gap: '1rem',
  justifyContent: 'start',
  alignItems: 'center',
  height: '100%',
  overflowX: 'auto',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
})
