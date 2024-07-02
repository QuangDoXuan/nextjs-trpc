import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        title: '16px',
        subTitle: '14px',
      },
      colors: {
        'custom-gray': '#475467',
        'custom-black': '#344054',
      },
      backgroundImage: {
        'banner': "url('/images/jason-leung-poI7DelFiVA-unsplash.jpg')",
      }
    },
  },
  plugins: [],
};

export default config;
