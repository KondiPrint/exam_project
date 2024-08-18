/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        offWhite: '#FBF8F4',
        fontFarve: '#262626',
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        heartbeat: 'heartbeat .6s ease-out',
        jiggle: 'jiggle 2s ease-in-out',
        'fade-in-left': 'fade-in-left 1s ease-out',
        'fade-in': 'fade-in 0.6s ease-in',
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(76) forwards, blink 1s steps(76) infinite 2s',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'slide-out-right': 'slide-out-right 1s ease-out infinite',
        'slide-out-left': 'slide-out-left 1s ease-out infinite',
        'zoom-in': 'zoom-in 0.6s ease-out',
        'zoom-out': 'zoom-out 0.3s ease-out',
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
        jiggle: {
          '0%': { transform: 'rotate(-10deg)' },
          '20%': { transform: 'rotate(10deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(10deg)' },
          '80%': { transform: 'rotate(-10deg)' },
          '100%': { transform: 'rotate(0deg)' },
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
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
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
          primary: '#9B68F0',
          secondary: '#6C67F0',
          accent: '#C462F0',
          'base-content': '#262626',
          'base-100': '#FBF8F4',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#9B68F0',
          secondary: '#6C67F0',
          accent: '#C462F0',
          'base-content': '#FBF8F4',
          'base-100': '#262626',
        },
      },
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
};
