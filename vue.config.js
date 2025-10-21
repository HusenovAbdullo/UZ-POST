// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    // Front faqat localhost bilan gaplashadi, u esa so‘rovni yangi domena uzatadi
    proxy: {
      // Brauzerdan /api/... deb yuborsak, bu so‘rov https://new.pochta.uz ga o‘tadi
      '^/api': {
        target: 'https://new.pochta.uz',
        changeOrigin: true,   // Host sarlavhasini moslashtiradi
        secure: false,        // Self-signed/SSLen tekshiruvini bo‘shatadi (prod’da shart emas)
        // Kerak bo‘lsa, qo‘shimcha headerlar:
        // headers: { Origin: 'https://new.pochta.uz' },
        // Agar siz /api ni olib tashlamoqchi bo‘lsangiz, shuni yoqing:
        // pathRewrite: { '^/api': '' },
        // logLevel: 'debug',
      },
    },
    // historyApiFallback: true, // SPA router bo‘lsa kerak bo‘lishi mumkin
  },
})
