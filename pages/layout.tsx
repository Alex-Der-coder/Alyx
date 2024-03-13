import { ThemeProvider } from "../@/components/ui/theme-provider"

export default function RootLayout({ children } : RootLayoutProps) {
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
