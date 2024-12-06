import type { Config } from "tailwindcss"
import scrollbarPlugin from "tailwind-scrollbar"

export default {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [scrollbarPlugin],
} satisfies Config
