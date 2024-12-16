import scrollbarPlugin from "tailwind-scrollbar"
import type { Config } from "tailwindcss"
// @ts-expect-error: no-types for tailwindcss-debug-screens
import debugScreensPlugin from "tailwindcss-debug-screens"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
    },
    debugScreens: {
      position: ["bottom", "right"],
    },
  },
  plugins: [debugScreensPlugin, scrollbarPlugin],
} satisfies Config
