/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        fira:['var(--font-fira)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor:{
        primary:{
          900:'var(--primary-900)',
          700:'var(--primary-700)'
        },
        secondary:{
          900:'var(--secondary-900)'
        }
      },
      boxShadow:{
        sm:'0px 3px 12px 3px rgba(0,0,0,0.15)',
        md:'0px 3px 12px 3px rgba(0,0,0,0.6)',
        lg:'0px 3px 12px 3px rgba(0,0,0,0.9)',
      }
    },
  },
  plugins: [],
}
