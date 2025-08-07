import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#f2ede2",
        },
        primary: {
          DEFAULT: "#08181A",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontSize: {
        // Heading
        "heading-lg": ["28px", { lineHeight: "100%", fontWeight: "700" }],
        "heading-md": ["20px", { lineHeight: "175%", fontWeight: "400" }],
        "heading-sm": ["12px", { lineHeight: "120%", fontWeight: "500" }],

        // Body
        "body-md": ["16px", { lineHeight: "150%", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "150%", fontWeight: "400" }],
        "body-xs": ["12px", { lineHeight: "150%", fontWeight: "400" }],

        // Tags
        "body-tag": ["12px", { lineHeight: "100%", fontWeight: "400" }],
      },
    },
  },
} satisfies Config
