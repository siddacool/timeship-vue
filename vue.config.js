module.exports = {
  pwa: {
    themeColor: '#c9c9c9',
  },
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/timeship-vue/'
    : '/',
};
