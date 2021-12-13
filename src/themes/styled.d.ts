import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      tertiary: string
      quaternary: string
      quinary: string
      senary: string
      fontPrimary: string
      fontSecondary: string
      fontTertiary: string
      placeholder: string
      favorite: string
      unfavorite: string
    }
    spacing: {
      none: number
      x1: number
      x2: number
      x3: number
      x4: number
      x5: number
      x6: number
      x7: number
      x8: number
    }
    borderRadius: {
      none: number
      x1: number
      x2: number
      x3: number
    }
    fonts: {
      light300: string
      regular400: string
      bold700: string
      extraBold800: string
      black900: string
    }
    fontSizes: {
      searchBar: number
      searchResult: number
      weatherCard: number
      country: number
      description: number
      degrees: number
    }
  }
}
