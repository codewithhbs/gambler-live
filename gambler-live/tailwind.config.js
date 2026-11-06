/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A1230",   // deep navy, primary bg
          soft: "#111B40",      // card surface on dark
          line: "#22305E",      // hairline borders on dark
        },
        paper: {
          DEFAULT: "#EEF3FB",   // cool light, secondary bg
          dim: "#DFE7F4",
        },
        moss: {
          50: "#ECFEFF",
          200: "#A5F3FC",
          400: "#67E8F9",
          500: "#22D3EE",       // primary accent, cyan
          600: "#0EA5C6",
          700: "#0E7490",
        },
        clay: "#8D9CC4",        // muted blue-gray, supporting neutral
        bone: "#C3CDE6",        // light blue-gray supporting tone
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.2vw, 3.75rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 2.6vw, 2.5rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1240px",
        prose: "68ch",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        lg: "10px",
      },
      boxShadow: {
        card: "0 1px 0 rgba(0,0,0,0.4), 0 12px 32px -16px rgba(0,0,0,0.45)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
