export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/assets/img/logo.png",
    "heroText": "programming",
    "tagline": "快乐编程",
    "actionText": "快速上手 →",
    "actionLink": "/guide/",
    "features": [
      {
        "title": "没想好",
        "details": "没想好。"
      },
      {
        "title": "没想好",
        "details": "没想好"
      },
      {
        "title": "没想好",
        "details": "没想好"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2018-present Evan You"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "README.md"
}

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
