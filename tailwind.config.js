/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
      colors: {
        blueGray: '#293B5F',
        darkPurple: '#261C2C',
      },
      backgroundImage: {
        'grey-bg': "url('/assets/image/bg2.jpg')",
        'blue-bg': "url('/assets/image/bg1.jpg')",
        'white-pattern': "url('/assets/image/bg5.jpg')",
        'topo-pattern': "url('/assets/image/contour.png')",
      },
      animation: {
        heartbeat: 'heartbeat .6s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out',
        'fade-in': 'fade-in 0.6s ease-in',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'slide-out-right': 'slide-out-right 1s ease-out infinite',
        'slide-out-left': 'slide-out-left 1s ease-out infinite',
        'zoom-in': 'zoom-in 0.6s ease-out',
        'zoom-out': 'zoom-out 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-in-out',
      },
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.03)' },
          '20%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(0.97)' },
          '40%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
          '60%': { transform: 'scale(1)' },
          '70%': { transform: 'scale(0.97)' },
          '80%': { transform: 'scale(1)' },
          '90%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(20px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'slide-out-right': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(10px)',
          },
        },
        'slide-out-left': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-10px)',
          },
        },
        'zoom-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5)',
          },
          '100%': {
            opacity: '100',
            transform: 'scale(1)',
          },
        },
        'zoom-out': {
          '0%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(.5)',
          },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#D45D79',
          secondary: '#666666',
          accent: '#AAAAAA',
          neutral: '#555555',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#D45D79',
          secondary: '#666666',
          accent: '#AAAAAA',
          neutral: '#555555',
        },
      },
    ],
    darkTheme: 'light',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
};
