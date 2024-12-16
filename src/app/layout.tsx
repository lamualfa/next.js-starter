import "./layout.css"

import { Inter } from "next/font/google"
import type { PropsWithChildren } from "react"

import { isDevelopment } from "@/libs/config"
import clsx from "clsx"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Next.js Starter",
}

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "scrollbar-thin font-sans",
          interFont.variable,
          isDevelopment && "debug-screens",
        )}
      >
        {props.children}
      </body>
    </html>
  )
}
