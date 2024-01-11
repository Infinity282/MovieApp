import styled from '@emotion/styled'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useScrollDirection } from '../hooks/useScrollDirection'

const StyledHeader = styled.header({
  position: 'sticky',
  display: 'flex',
  top: '0',
  zIndex: '100',
  gap: '1rem',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  height: '4rem',
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '500ms',
  '&.hidden': {
    top: '-4rem',
  },
})

const StyledLink = styled(Link)({
  display: 'flex',
  height: 'calc(100% - 1rem)',
  width: '10rem',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#aeaeae',
  fontSize: '2rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
  '&.active': {
    color: 'white',
    borderBottom: '0.1rem solid orange',
    paddingBottom: '0.5rem',
  },
  ':hover': {
    color: 'white',
    borderBottom: '0.1rem solid orange',
    paddingBottom: '0.5rem',
  },
})

const Header: FC = () => {
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
