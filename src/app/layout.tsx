import "./layout.css"

import clsx from "clsx"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type { PropsWithChildren } from "react"

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
      <body className={clsx("scrollbar-thin", interFont.variable)}>
        {props.children}
      </body>
    </html>
  )
}
