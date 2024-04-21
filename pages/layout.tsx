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
          <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
     
        }}
      >
          <motion.div
            style={{
              position: "absolute", // Positionnement absolu pour le spinner
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
                backgroundColor: "#60f",
                display: hideSpinner ? "none" : "flex",
                placeItems: "center",
                placeContent: "center",
                zIndex: 9999,

            }}
            animate={{ backgroundColor: ["#0af", "rgba(0,0,0,0)", "#fa0"] }}
            transition={{
                duration: 4,
                repeatType: "reverse"
            }}
            onAnimationStart={handleAnimationStart}
            onAnimationComplete={() => {
              handleAnimationComplete();
              handleAnimationcontainerComplete();
            }}

        >
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff"
                }}
                animate={{ rotate: [0, 180] }}
                transition={{
                    duration: 4,
                    repeatType: "reverse"
                }}
            />

            </motion.div>
            <NavigationMenu />
          {children}
          <Footer />
          </div>
        </ThemeProvider>

  )
}
