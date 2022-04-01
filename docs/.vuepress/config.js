const path = require('path')
module.exports = {
	lang: 'zh-CN',
	title: 'programming',
	description: 'programming web site',
	themeConfig: {
		logo: '/assets/img/logo.png',
		navbar: [
			{
				text: '指南',
				link: '/guide'
			},
			{
				text: '前端经典问题',
				children: [
					{ text: '事件循环机制', link: '/classicalProblems/eventLoop/' },
					{ text: '数组的reduce方法', link: '/classicalProblems/arrayExtends/reduce' },
				]
			}
		],
		sidebar: 'auto'
	},
	markdown: {
		importCode: {
			handleImportPath: (str) =>
				str.replace(/^@codebase/, path.resolve(__dirname, '../../codeBase')),
		},
	},
}