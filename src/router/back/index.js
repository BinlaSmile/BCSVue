import Layout from '@/views/back/index';

// import honeycomb from '@/views/back/honeycomb' // 测试用
export default [

    {
        path: '/back/index',
        name: 'backIndex',
        meta: { requireAuth: true },
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/back/index')
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