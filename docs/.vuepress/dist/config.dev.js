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
    sidebar: 'auto'
  },
  markdown: {
    importCode: {
      handleImportPath: function handleImportPath(str) {
        return str.replace(/^@codebase/, path.resolve(__dirname, '../../codeBase'));
      }
    }
  }
};