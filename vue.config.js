module.exports = {
  pwa: {
    themeColor: '#054fdb',
  },
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/timeship-vue/'
    : '/',
};
