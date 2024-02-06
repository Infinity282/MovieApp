import styled from '@emotion/styled'

export const StyledMain = styled.main({
  width: '100%',
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const StyledImageContainer = styled.div({
  width: '500px',
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'inline-block',
    borderRadius: '1.25rem',
  },
})

export const StyledMovieContainer = styled.div({
  display: 'flex',
  padding: '0 4rem',
})

export const StyledDescriptionContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 2rem 0 4rem',
  '& h1': {
    margin: '0 0 0.25rem 0',
  },
  '& h2': {
    margin: '0 0 1rem 0',
  },
})

export const StyledGenresContainer = styled.div({
  display: 'flex',
  gap: '1rem',
  margin: '0 0 1rem 0',
})

export const StyledScoreContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
})

type VoteAverageProps = Partial<{
  color: string
}>

export const StyledVoteAverage = styled.p((props: VoteAverageProps) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: props.color,
  margin: '0 0 0.25rem 0',
}))

export const StyledVotesCount = styled.p({
  margin: '0 0 1rem 0',
})
