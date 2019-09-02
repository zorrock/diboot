module.exports = {
    title: 'Diboot2.0',
    description: 'Diboot2.0，更好用的轻代码开发平台',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    host: '0.0.0.0',
    port: '9090',
    base: '/docs/',
    themeConfig: {
        // sidebar: 'auto',

        sidebar: {
            '/guide/diboot-core/': [
                {
                    title: 'diboot-core指南',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/guide/diboot-core/安装', '安装'],
                        ['/guide/diboot-core/实体Entity', '实体Entity'],
                        ['/guide/diboot-core/Service与实现', 'Service与实现'],
                        ['/guide/diboot-core/Mapper及自定义', 'Mapper及自定义'],
                        ['/guide/diboot-core/接口的艺术Controller', '接口的艺术Controller'],
                        ['/guide/diboot-core/查询条件DTO', '查询条件DTO'],
                        ['/guide/diboot-core/单表关联', '单表关联'],
                        ['/guide/diboot-core/多表关联', '多表关联'],
                        ['/guide/diboot-core/数据字典关联', '数据字典关联'],
                        ['/guide/diboot-core/异常处理', '异常处理'],
                        ['/guide/diboot-core/常用工具类', '常用工具类']
                    ]
                }
            ],
            '/guide/diboot-shiro/': [
                {
                    title: 'shiro使用指南',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/guide/diboot-shiro/安装', '安装'],
                        ['/guide/diboot-shiro/权限设置', '权限设置'],
                        ['/guide/diboot-shiro/权限缓存', '权限缓存'],
                    ]
                }
            ],
            '/guide/diboot-devtools/': [
                {
                    title: 'diboot-devtools指南',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/guide/diboot-devtools/安装', '安装'],
                        ['/guide/diboot-devtools/启动', '启动'],
                        ['/guide/diboot-devtools/数据表管理', '数据表管理'],
                        ['/guide/diboot-devtools/代码生成与更新', '代码生成与更新']
                    ]
                }
            ]
        },
        nav: [{
            text: '首页', link: '/'
        }, {
            text: '学习',
            items: [
                {text: 'diboot-core指南', link: '/guide/diboot-core/安装'},
                {text: 'diboot-shiro指南', link: '/guide/diboot-shiro/安装'},
                {text: 'diboot-devtools指南', link: '/guide/diboot-devtools/安装'}
            ]
        }, {
            text: 'API',
            items: [
                {text: 'diboot-core', link: '/api/diboot-core/'}
            ]
        },{
            text: '1.x', link: 'https://www.diboot.com'
        }, {
            text: 'GitHub', link: 'https://github.com/dibo-software/diboot-v2'
        }]
    }
}