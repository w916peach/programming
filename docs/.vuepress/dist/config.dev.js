"use strict";

var path = require('path');

module.exports = {
  lang: 'zh-CN',
  title: 'programming',
  description: 'programming web site',
  themeConfig: {
    logo: '/assets/img/logo.png',
    navbar: [{
      text: '指南',
      link: '/guide'
    }, {
      text: 'web前端开发课程',
      children: [{
        text: '结构样式',
        link: '/webFrontEnd/htmlAndCss'
      }]
    }, {
      text: 'javaWeb开发课程',
      children: [{
        text: 'java基础',
        link: '/javaWeb/javaBase'
      }]
    }, {
      text: 'python学习',
      children: [{
        text: 'python基础核心50讲',
        link: '/PythonCoreCourses50'
      }]
    }, {
      text: '前端经典问题',
      children: [{
        text: '事件循环机制',
        link: '/classicalProblems/eventLoop/'
      }, {
        text: '数组的reduce方法',
        link: '/classicalProblems/arrayExtends/reduce'
      }]
    }, {
      text: '随笔',
      children: [{
        text: '密码学',
        link: '/informalEssay/cryptography'
      }]
    }],
    sidebar: 'auto',
    sidebarDepth: 6
  },
  markdown: {
    importCode: {
      handleImportPath: function handleImportPath(str) {
        return str.replace(/^@codebase/, path.resolve(__dirname, '../../codeBase'));
      }
    },
    extractHeaders: {
      level: [1, 2, 3, 4, 5, 6]
    }
  }
};