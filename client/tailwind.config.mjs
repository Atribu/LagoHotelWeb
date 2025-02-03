/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        marcellus:['Marcellus','sans-serif'],
      },

       boxShadow: {
        custom: '0px 2px 13px 0px rgba(0, 0, 0, 0.10)',  
      },
    },
  },
  plugins: [],
};
