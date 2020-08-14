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
        path: '/back/projectManage/111',
        name: 'projectManage111',
        meta: {
            requireAuth: true
        },
        component: Layout,
        children: [{
            path: '',
            component: () =>
                import('@/pages/back/projectManage/111')
        }],
    },

    {
        path: '/back/projectManage/222',
        name: 'projectManage222',
        meta: {
            requireAuth: true
        },
        component: Layout,
        children: [{
            path: '',
            component: () =>
                import('@/pages/back/projectManage/222')
        }],
    },


]