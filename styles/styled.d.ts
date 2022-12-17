import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    
    colors: {
      primary: string
      secondary: string
      third: string
      fourth: string
  
      background: string
      text: string
    }
  }
}
