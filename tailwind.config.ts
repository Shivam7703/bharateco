import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
  
      },
      colors: {
        green1: '#BCD42F',
        green2: '#C0D731',
        green3:"#5E9F13",
        green4: "#F0FAEF",
      },
    },
  },
  plugins: [],
};

export default config;
