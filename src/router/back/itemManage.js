// 库存管理
const Layout = () =>
    import('@/views/back/index')

export default [
    {
        path: '/back/itemManage',
        name: 'itemManage',
        meta: {
            requireAuth: true
        },
        component: Layout,
        redirect: '/layout/itemManage',
        children: [{
            path: '/layout/itemManage',
            name: 'itemManage',
            component: () =>
                import('@/pages/back/itemManage/itemManage')
        }],
    },

    {
        path: '/back/itemManage/itemList',
        name: 'itemList',
        meta: {
            requireAuth: true
        },
        component: Layout,
        children: [{
            path: '',
            component: () =>
                import('@/pages/back/itemManage/itemList')
        }],
    },


]