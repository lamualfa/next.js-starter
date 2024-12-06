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
})

interface RootLayoutProps extends PropsWithChildren {}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={clsx(
          interFont.className,
          "scrollbar-thin",
          isDevelopment && "debug-screens",
        )}
      >
        {props.children}
      </body>
    </html>
  )
}
