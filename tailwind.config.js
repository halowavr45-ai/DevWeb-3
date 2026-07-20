/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#18181B",
        surface: "#202023",
        surface2: "#29292D",
        shell: "#4B4B52",
        acid: "#EF4444",
        bandana: "#B91C1C",
        paper: "#F8F8F6",
        muted: "#94949C",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "layer-lines":
          "repeating-linear-gradient(0deg, rgba(201,255,61,0.05) 0px, rgba(201,255,61,0.05) 1px, transparent 1px, transparent 6px)",
      },
    },
  },
  plugins: [],
};
