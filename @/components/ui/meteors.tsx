import { cn } from "../../lib/utils";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface MeteorStyle {
  top: number;
  left: number;
  animationDelay: string;
  animationDuration: string;
}

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<MeteorStyle[]>([]);

  useEffect(() => {
    const styles: MeteorStyle[] = [];
    for (let i = 0; i < (number || 20); i++) {
      styles.push({
        top: 0,
        left: Math.floor(Math.random() * (400 - -400) + -400),
        animationDelay: (Math.random() * (0.8 - 0.2) + 0.2).toFixed(2) + "s",
        animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
      });
    }
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: style.top + "px",
            left: style.left + "px",
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
          }}
        ></span>
      ))}
    </>
  );
};
