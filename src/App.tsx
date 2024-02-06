import { Global } from '@emotion/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/movie/MovieInfo'
import { GlobalStyles } from './styles/Global.styles'

const App = () => {
  return (
    <BrowserRouter>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/movie/:id'} element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
