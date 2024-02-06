import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const StyledHeader = styled.header({
  position: 'sticky',
  display: 'flex',
  backgroundColor: '#202020',
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

export const StyledLink = styled(Link)({
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
