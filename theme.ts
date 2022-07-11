import { createGlobalStyle, css } from 'styled-components'
import baseStyled, { ThemedStyledInterface } from 'styled-components';
import OpenSansRegularTTF from '../assets/fonts/OpenSans-Regular.ttf'
import OpenSansRegularWOFF from '../assets/fonts/OpenSans-Regular.woff'
import OpenSansSemiBoldTTF from '../assets/fonts/OpenSans-SemiBold.ttf'
import OpenSansSemiBoldWOFF from '../assets/fonts/OpenSans-SemiBold.woff'
import OpenSansBoldTTF from '../assets/fonts/OpenSans-Bold.ttf'
import OpenSansBoldWOFF from '../assets/fonts/OpenSans-Bold.woff'

export const breakpoint = {
  xs: '(min-width: 360px) and (max-width: 1023px)',
  sm: '(min-width: 1024px)',
  md: '(min-width: 1440px)',
}

export const borderRadius = {
  xs: '4px',
  sm: '8px',
  md: '12px',
}

export const spacing = {
  xxs: '4px',
  xs: '8px',
  sm: '12px',
  md: '20px',
  lg: '24px',
  xl: '32px',
  xxl: '40px',
  xxxl: '52px',
}

export const fontWeight = {
  normal: 400,
  semibold: 600,
  bold: 700,
}

export const font = {
  h1: `
    font-size: 28px;
    line-height: 40px;
    font-weight: ${fontWeight.bold};
  `,
  h2: `
  font-size: 24px;
  line-height: 29px;
  font-weight: ${fontWeight.bold};
`,
  h3: `
    font-size: 18px;
    line-height: 24px;
    font-weight: ${fontWeight.bold};
  `,
  body1: `
    font-size: 14px;
    line-height: 20px;
    font-weight: ${fontWeight.semibold};
  `,
  body2: `
    font-size: 14px;
    line-height: 20px;
    font-weight: ${fontWeight.normal};
  `,
  caption1: `
    font-size: 12px;
    line-height: 16px;
    font-weight: ${fontWeight.normal};
  `,
  caption2: `
    font-size: 12px;
    line-height: 16px;
    font-weight: ${fontWeight.semibold};
  `,
}

export const color = {
  bg: {
    primary: '#FFFFFF',
    secondary: '#F4F6FC',
    accent: '#313A4E',
    tertiary: '#1D3E6F',
    positive: '#EBFDFD',
    negative: '#FCEDED',
  },
  text: {
    primary: '#0D0D22',
    secondary: '#8C93A8',
    tertiary: '#D1D6E1',
    inverted: '#FFFFFF',
    positive: '#089170',
    negative: '#B11B1B',
  },
  button: {
    primary: '#109CF1',
    hover: '#057DC6',
  },
  graphics: {
    primary: '#1D3E6F',
    secondary: '#0D0D22',
    tertiary: '#8C93A8',
    disabled: '#D1D6E1',
    inverted: '#FFFFFF',
  },
  border: {
    default: '#D1D6E1',
    hover: '#B2B7C2',
  },
}

const transition = {
  common: 'all 0.2s ease-in-out',
}

export const theme = {
  color,
  font,
  fontWeight,
  borderRadius,
  breakpoint,
  spacing,
  transition,
}

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), local('Open Sans'),
    url(${OpenSansRegularTTF}) format('ttf'),
    url(${OpenSansRegularWOFF}) format('woff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), local('Open Sans'),
    url(${OpenSansSemiBoldTTF}) format('ttf'),
    url(${OpenSansSemiBoldWOFF}) format('woff');
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), local('Open Sans'),
    url(${OpenSansBoldTTF}) format('ttf'),
    url(${OpenSansBoldWOFF}) format('woff');
    font-weight: 700;
    font-style: normal;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  color: ${theme.color.text.primary};
}
h1,h2,h3,h4,h5 {
  margin: 0;
}
`

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;