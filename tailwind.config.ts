import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'largeTitle': '32px',
        'title1': '28px',
        'title2': '24px',
        'mediumText': '16px',
        'smallText': '14px',
        'extraSmallText': '13px',
      },
      lineHeight: {
        'largeTitle': '46px',
        'title1': '34px',
        'title2': '32px',
        'mediumText': '24px',
        'smallText': '18px',
      },
      boxShadow: {
        'custom': '0px 2.09px 11.06px 0px rgba(0, 0, 0, 0.25)', // 0.25 — это 40% непрозрачности
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: '#2B2B2B',
        customBlue: '#3177F2',
        customOrange: '#FF5D17',
        customBlack: '#2B2B2B',
        customGray2: '#646464',
      },
    },
  },
  plugins: [],
};
export default config;
