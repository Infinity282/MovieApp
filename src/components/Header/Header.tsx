import { useScrollDirection } from '../../hooks/useScrollDirection'
import { StyledHeader, StyledLink } from './Header.style'

const Header = () => {
  const scrollDirection = useScrollDirection()
  const pathname = location.pathname

  return (
    <StyledHeader className={scrollDirection === 'down' ? 'hidden' : 'show'}>
      <StyledLink className={pathname.startsWith('/') ? 'active' : ''} to={'/'}>
        Home
      </StyledLink>
      <StyledLink className={pathname.startsWith('/movies') ? 'active' : ''} to={'/movies'}>
        Movies
      </StyledLink>
      <StyledLink className={pathname.startsWith('/tv-shows') ? 'active' : ''} to={'/tv-shows'}>
        TV Shows
      </StyledLink>
    </StyledHeader>
  )
}

export default Header
