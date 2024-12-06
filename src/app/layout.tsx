import "./layout.css"

import { Inter } from "next/font/google"
import type { PropsWithChildren } from "react"

import type { Metadata } from "next"
import clsx from "clsx"

export const metadata: Metadata = {
  title: "Sunday",
}

const interFont = Inter({
  subsets: ["latin"],
})

interface RootLayoutProps extends PropsWithChildren {}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={clsx(interFont.className, "scrollbar-thin")}>
        {props.children}
      </body>
    </html>
  )
}
