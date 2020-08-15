import Layout from '@/views/back/index';
import projectManage from '@/router/back/projectManage' // 项目管理
import itemManage from '@/router/back/itemManage' // 库存管理
import userManage from '@/router/back/userManage' // 用户管理
export default [
    ...projectManage,
    ...itemManage,
    ...userManage,
    {
        path: '/back/index',
        name: 'backIndex',
        meta: { requireAuth: true },
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/pages/back/main')
            }
        ]
    }
    // ,
    // {
    //     path: '/test',
    //     name: 'test',
    //     component: honeycomb
    // }
]