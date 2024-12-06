import scrollbarPlugin from "tailwind-scrollbar"
import type { Config } from "tailwindcss"

export default {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [scrollbarPlugin],
} satisfies Config
