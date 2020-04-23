export const menuListConfig = [
    {
        title: '首页', // 菜单标题名称
        key: '/management/home', // 对应的path
        icon: 'home', // 图标名称
    },
    {
        title: '商品',
        key: '/management/products',
        icon: 'appstore',
        children: [ // 子菜单列表
            {
                title: '品类管理',
                key: '/management/product',
                icon: 'bars'
            },
            {
                title: '商品管理',
                key: '/management/category',
                icon: 'tool'
            },
        ]
    },
    {
        title: '用户管理',
        key: '/management/user',
        icon: 'user'
    },
    {
        title: '角色管理',
        key: '/management/role',
        icon: 'safety',
    },
    {
        title: '图形图表',
        key: '/management/charts',
        icon: 'area-chart',
        children: [
            {
                title: '柱形图',
                key: '/management/charts/bar',
                icon: 'bar-chart'
            },
            {
                title: '折线图',
                key: '/management/charts/line',
                icon: 'line-chart'
            },
            {
                title: '饼图',
                key: '/management/charts/pie',
                icon: 'pie-chart'
            },
        ]
    },
]
