module.exports = {
  purge: {
    // './src/index.html',
    // './src/components/*.js',
    enabled: true,
    content: [
      './src/index.html',
      './src/components/*.js'
    ]
    }  ,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
