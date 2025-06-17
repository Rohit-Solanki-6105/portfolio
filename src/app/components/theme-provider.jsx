"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"

export function AppThemeProvider({
  children,
  ...props
}){
  return <ThemeProvider {...props}>{children}</ThemeProvider>
}