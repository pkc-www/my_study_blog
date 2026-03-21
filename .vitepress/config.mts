import { defineConfig } from 'vitepress'

import katex from '@traptitech/markdown-it-katex'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my_study_blog/', 
  title: "Avalanche_Blog",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.8/katex.min.css' }],
  ],
  description: "学习笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: {
        // 当你在“电路原理”文件夹下时，显示这个侧边栏
        '/电路原理/': [
          {
            text: '电路原理',
            items: [
              { text: '电路基本知识', link: '/电路原理/电路基本知识' },
              { text: 'MOSFET与逻辑门', link: '/电路原理/MOSFET与逻辑门' },
              { text: '运算放大器', link: '/电路原理/运算放大器' },
              { text: '二端口网络', link: '/电路原理/二端口网络' }
            ]
          }
        ],
        
        '/电磁场/': [
          {
            text: '电磁场',
            items: [
              { text: '场论', link: '/电磁场/场论' },
              { text: '电磁场', link: '/电磁场/电磁场笔记' },
            ]
          }
        ],
    
        // 当你在“复变函数”文件夹下时，显示这个侧边栏
        '/复变函数/': [
          {
            text: '复变函数',
            items: [
              { text: '复变函数', link: '/复变函数/复变函数' },
            ]
          }
        ]
      },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    outline: {
      level: [2, 3], 
      
      // 顺便把那个 "On this page" 汉化了
      label: '本页目录'
     },
    
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    }
  },

    markdown: {
    config: (md) => {
      // 使用 KaTeX 插件
      md.use(katex)
    }
  }
})

