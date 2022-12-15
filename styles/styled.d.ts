import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    
    colors: {
      primary: string
      secondary: string
      third: string
      fourth: string
  
      customLightGrey: string
      customLightPink: string
      customOrange: string
      customRed: string

      sucess: string
      danger: string
  
      background: string
      text: string
    }
  }
}
