import { StyledVoteAverage } from '../../pages/movie/MovieInfo.style'

interface ScoreData {
  score?: number
}

const Score = ({ score = 0.0 }: ScoreData) => {
  function scoreColor() {
    if (score >= 7.5) {
      return 'green'
    } else if (score >= 5.0) {
      return 'yellow'
    }
    return 'red'
  }

  return (
    <>
      <StyledVoteAverage color={scoreColor()}>{score}</StyledVoteAverage>
    </>
  )
}

export default Score
