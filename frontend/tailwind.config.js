module.exports = {
    content: [
      './src/*/.{js,jsx,ts,tsx}',
      './public/index.html',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3B82F6', // Blue
          secondary: '#10B981', // Green
          accent: '#F59E0B', // Amber
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };