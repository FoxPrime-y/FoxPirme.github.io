import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
     nav: [
            { text: '首页', link: '/' },
            { text: '我的洛谷练习题', link: '/luogu/' },
          ],
          sidebar:{
            '/blog/' :[

            ]
          }
  }),
})
// module.exports={
//   title:"FoxPrime的博客",
//   themeConfig: {
//     nav: [
//       { text: '首页', link: '/' },
//       { text: '我的洛谷练习题', link: '/luogu/' },
//       { text: '技术支持', link: 'https://www.vuepress.cn/' },
//     ],
//     sidebar: {
//       '/blog/': [
//         '',
//         'installblog',
//       ],
//       '/': [
//         '',
//         'guide',
//         'about'
//       ]
//     }
//   }
// }