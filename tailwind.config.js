export default {
  content: [
    "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    "/data/data/com.termux/files/home/React-villageProject/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      colors: {
      'default': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
      screens:{
        'mn':'304px',
        'sm':'704px',
        'md':'992px',
        'lg':'1024px',
       'xl':'1280px',
       '2xl':'1536px',
      },
      fontSize: {
      sm: '1rem',
      md: '2rem',
      lg: '3rem',
    },
    borderRadius: {
    1:'10px',
    2:'20px',
    3:'50px',
    4:'100px',
    }
    },
  },
plugins:[
 require('tailwindcss'),
    require('autoprefixer'), 
  ],
}
