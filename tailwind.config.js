/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",    // ✅ 你的 src 目录
    "node_modules/preline/dist/*.js"   // ✅ 添加 Preline 组件路径
  ],
  theme: {
    extend: {},
  },
  plugins: [
        
  ],
}
