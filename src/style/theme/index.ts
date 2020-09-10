import { DefaultTheme } from 'styled-components'
import media from './media'
import flexboxTheme from './flexboxTheme'


const theme: DefaultTheme = {
  colors: {
    primary: '#4BB543',
    secondary: '#FF0000',
  },
  media,
  flexboxgrid: flexboxTheme
}

export default theme
