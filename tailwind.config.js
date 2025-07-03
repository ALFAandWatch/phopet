module.exports = {
   content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         colors: {
            naranja: '#FF6B00',
            violeta: '#6D25FF',
         },
         fontFamily: {
            openSans: ['"Open Sans"', 'sans-serif'],
         },
      },
   },
   plugins: [],
};
