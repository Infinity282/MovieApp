import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/movie/MovieDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/movie/:id'} element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
