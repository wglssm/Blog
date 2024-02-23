import comp from "/Users/lesiwww/Documents/WEB/NewProject/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Blogs\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":false,\"title\":\"Blogs\",\"heroImage\":\"https://it-s.com/wp-content/webp-express/webp-images/uploads/2023/03/c-users-sps-desktop-d2192b7ef27e226ec745e8469a5ad.jpeg.webp\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/getting-started.html\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Simplicity First\",\"details\":\"Minimal setup with markdown-centered project structure helps you focus on writing.\"},{\"title\":\"Vue-Powered\",\"details\":\"Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.\"},{\"title\":\"Performant\",\"details\":\"VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.\"},{\"title\":\"Themes\",\"details\":\"Providing a default theme out of the box. You can also choose a community theme or create your own one.\"},{\"title\":\"Plugins\",\"details\":\"Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.\"},{\"title\":\"Bundlers\",\"details\":\"Default bundler is Vite, while Webpack is also supported. Choose the one you like!\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{\"updatedTime\":1708684420000,\"contributors\":[{\"name\":\"Lesi Wei\",\"email\":\"wglssm.wls@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\",\"excerpt\":\"<p>This is the content of home page. Check <a href=\\\"https://vuejs.press/reference/default-theme/frontmatter.html#home-page\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Home Page Docs</a> for more details.</p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
