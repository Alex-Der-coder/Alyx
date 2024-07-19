import { ThemeProvider } from "../@/components/ui/theme-provider"
import { motion } from "framer-motion";
import { useState } from "react";
import NavigationMenu from "./components/NavigationMenuDemo";
import Footer from "./components/Footer";

type RootLayoutProps =  any

export default function RootLayout({ children } : RootLayoutProps ) {

  const [hideSpinner, setHideSpinner] = useState(false);

  const handleAnimationComplete = () => {
    setHideSpinner(true);
  };

  const handleAnimationStart = () => {
    document.body.style.overflow = 'hidden'; 
  }
  
  const handleAnimationcontainerComplete = () => {
    document.body.style.overflow = ''; 
  }

  
  return (

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        
            <NavigationMenu />
          {children}
          <Footer />
  
        </ThemeProvider>


  )
}
