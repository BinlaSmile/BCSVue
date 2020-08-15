// 用户管理
const Layout = () =>
    import('@/views/back/index')

export default [
    {
        path: '/back/userManage',
        name: 'userManage',
        meta: {
            requireAuth: true
        },
        component: Layout,
        redirect: '/layout/userManage',
        children: [{
            path: '/layout/userManage',
            name: 'userManage',
            component: () =>
                import('@/pages/back/userManage/userManage')
        }],
    },

    {
        path: '/back/userManage/userList',
        name: 'userList',
        meta: {
            requireAuth: true
        },
        component: Layout,
        children: [{
            path: '',
            component: () =>
                import('@/pages/back/userManage/userList')
        }],
    },


]