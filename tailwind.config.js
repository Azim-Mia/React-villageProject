export default {
  content: [
    "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    "/data/data/com.termux/files/home/React-villageProject/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
      primary:'#ffee3f',
      secendary:'coral',
      },
      screens:{
        'sm':'300px',
        'min':'640px',
        'md':'768px',
        'lg':'1024px',
       'xl':'1280px',
       '2xl':'1536px',
      }
    },
  },
plugins:[],
}
