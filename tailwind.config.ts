import scrollbarPlugin from "tailwind-scrollbar"
import type { Config } from "tailwindcss"
// @ts-ignore
import debugScreensPlugin from "tailwindcss-debug-screens"

export default {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    debugScreens: {
      position: ["bottom", "right"],
    },
  },
  plugins: [debugScreensPlugin, scrollbarPlugin],
} satisfies Config
