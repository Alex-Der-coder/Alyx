"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../@/components/ui/hero-highlight";

export default function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1 className="font-heading text-3xl   lg:text-7xl max-[730px]:mt-[40%] " 
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
  
      >
       An example app built using {" "}
        <Highlight className=" bg-dot-thick text-black dark:text-white">
        Next.js 14 server components.
        </Highlight>
      </motion.h1>

      <p className=" m-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 p-[15px]" >
            I&apos;m building a web app with Next.js 14 and open sourcing
            everything. Follow along as we figure this out together.
          </p>
    </HeroHighlight>
  );
}
