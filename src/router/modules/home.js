// import Layout from '@/layout'

const homeRouter = {
  path: '/home',
  name: 'home',
  component: () => import('@/views/home')
}

export default homeRouter
