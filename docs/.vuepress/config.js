module.exports = {
  title: "Duanky个人主页",
  description: "用于记录学习内容",
  plugins: ["vuepress-plugin-cat"],
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/images/photo.jpg" }],
    ["link", { rel: "manifest", href: "/images/photo.jpg" }],
    ["link", { rel: "apple-touch-icon", href: "/images/photo.jpg" }],
    ["meta", { "http-quiv": "pragma", cotent: "no-cache" }],
    ["meta", { "http-quiv": "pragma", cotent: "no-cache,must-revalidate" }],
    ["meta", { "http-quiv": "expires", cotent: "0" }],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: "/", // 部署到github相关的配置
  markdown: {
    lineNumbers: true, // 代码块是否显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      {
        text: "前端基础",
        link: "/accumulate/",
        items: [
          { text: "Chinese", link: "/language/chinese/" },
          { text: "Japanese", link: "/language/japanese/" },
        ],
      },
      { text: "算法题库", link: "/algorithm/" },
      { text: "诗和远方", link: "/others/" },
      { text: "微博", link: "https://baidu.com" },
    ],
    sidebar: "auto", // 侧边栏配置
    sidebarDepth: 2,
  },
};
