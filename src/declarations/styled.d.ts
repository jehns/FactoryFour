import 'styled-components'
import { Flexbox } from '../types/styleTypes'


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
    }
    media: any,
    flexboxgrid: Flexbox
  }
}
