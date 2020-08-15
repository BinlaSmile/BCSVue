// 项目管理
const Layout = () =>
    import('@/views/back/index')

export default [
    {
        path: '/back/projectManage',
        name: 'projectManage',
        meta: {
            requireAuth: true
        },
        component: Layout,
        redirect: '/layout/projectManage',
        children: [{
            path: '/layout/projectManage',
            name: 'projectManage',
            component: () =>
                import('@/pages/back/projectManage/projectManage')
        }],
    },

    {
        path: '/back/projectManage/projectList',
        name: 'projectList',
        meta: {
            requireAuth: true
        },
        component: Layout,
        children: [{
            path: '',
            component: () =>
                import('@/pages/back/projectManage/projectList')
        }],
    },

    {
        path: '/back/projectManage/additionalItems',
        name: 'additionalItems',
        meta: {
            requireAuth: true
        },
        component: Layout,
        children: [{
            path: '',
            component: () =>
                import('@/pages/back/projectManage/additionalItems')
        }],
    },


]