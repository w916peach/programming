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
                text: 'group',
                children: [{ text: '配置', link: '/config/' }]
            }
        ],
        sidebar: 'auto'
    }
}