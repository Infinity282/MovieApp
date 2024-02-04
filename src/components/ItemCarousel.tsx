import styled from '@emotion/styled'
import { useRef } from 'react'
import { PagedMovies } from '../interfaces/movie'
import MovieCard from './MovieCard'

const StyledMovieCarousel = styled.div({
  display: 'flex',
  position: 'relative',
})

const StyledCarouselButton = styled.button({
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

const StyledCarouselCardContainer = styled.ul({
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

interface ItemCarouselData {
  data: PagedMovies | undefined
}

const ItemCarousel = ({ data }: ItemCarouselData) => {
  const firstRef = useRef<HTMLLIElement>(null)
  const lastRef = useRef<HTMLLIElement>(null)

  // const scrollRef = useHorizontalScroll<HTMLUListElement>()

  const handleGoToFirst = () => {
    firstRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }

  const handleGoToLast = () => {
    lastRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }

  return (
    <StyledMovieCarousel>
      <StyledCarouselButton className='first' onClick={handleGoToFirst}>
        <svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 8 14'>
          <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13' />
        </svg>
      </StyledCarouselButton>
      <StyledCarouselCardContainer>
        {data?.results.map((item, index) => {
          if (index == 0) {
            return <MovieCard key={item.id} data={item} ref={firstRef} />
          } else if (index == data.results.length - 1) {
            return <MovieCard key={item.id} data={item} ref={lastRef} />
          }
          return <MovieCard key={item.id} data={item} />
        })}
      </StyledCarouselCardContainer>
      <StyledCarouselButton className='second' onClick={handleGoToLast}>
        <svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 8 14'>
          <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1' />
        </svg>
      </StyledCarouselButton>
    </StyledMovieCarousel>
  )
}

export default ItemCarousel
