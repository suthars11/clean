"use client";

import React, { createContext, ReactNode } from "react";
import { data } from "@/data/data";
import type { HeroContextType } from "@/data/types";

export type { HeroPage, HeroContextType } from "@/data/types";

export const HeroContext = createContext<HeroContextType | null>(null);

interface HeroProviderProps {
  children: ReactNode;
}

const HeroProvider = ({ children }: HeroProviderProps) => {
  return (
    <HeroContext.Provider value={data.hero}>
      {children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;
