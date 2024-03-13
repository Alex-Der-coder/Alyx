import { ThemeProvider } from "../@/components/ui/theme-provider"

type RootLayoutProps =  any

export default function RootLayout({ children } : RootLayoutProps ) {
  return (

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

  )
}
