import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const GlobalStyles = css([
  {
    '@font-face': {
      fontFamily: 'Source Sans Pro',
      fontStyle: 'normal',
      fontWeight: '400',
      fontDisplay: 'swap',
      src: "url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2) format('woff2')",
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  },
  {
    '@font-face': {
      fontFamily: 'Source Sans Pro',
      fontStyle: 'normal',
      fontWeight: '600',
      fontDisplay: 'swap',
      src: "url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu.woff2) format('woff2')",
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  },
  {
    '@font-face': {
      fontFamily: 'Source Sans Pro',
      fontStyle: 'normal',
      fontWeight: '700',
      fontDisplay: 'swap',
      src: "url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlxdu.woff2) format('woff2')",
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  },
  {
    '*': {
      fontFamily: 'Source Sans Pro, sans-serif',
      margin: '0',
      padding: '0',
    },
    body: {
      scrollBehavior: 'smooth',
      background: '#202020',
      color: 'white',
    },
  },
])
