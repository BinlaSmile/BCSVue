import Layout from '@/views/back/index';
import projectManage from '@/router/back/projectManage' // 项目管理
export default [
    ...projectManage,

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