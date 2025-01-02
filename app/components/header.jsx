"use client";

import React, { useEffect, useState } from "react";
import { ModeToggle } from "./theme-btn";
import { BackgroundBeamsWithCollisionDemo } from "./BackgroundBeamsWithCollisionDemo";
import Image from "next/image";
import { useTheme } from "next-themes";

function Upper() {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    setCurrentTheme(theme === "system" ? systemTheme : theme);
  }, [theme, systemTheme]);

  if (!currentTheme) {
    return null;
  }

  return (
    <div>
      <div className="mx-16 my-3 px-0">
        <div className="flex items-center justify-between rounded-full">
          <Image
            src={currentTheme === "dark" ? "/png-logo.png" : "/jpg-logo.jpg"}
            className="rounded-3xl"
            layout="fixed"
            width={100}
            height={100}
            alt="Logo"
          />
          <ModeToggle />
        </div>
      </div>
      <BackgroundBeamsWithCollisionDemo />
    </div>
  );
}

export default Upper;
