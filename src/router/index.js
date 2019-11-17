import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Logged from '../views/Logged.vue';
import VueChartJS from '@/views/VueChartJS';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/chartjs',
        name: 'VueChartJS',
        component: VueChartJS
    },
    {
        path: 'logged',
        name: 'Logged',
        component: Logged
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
];

const router = new VueRouter({
    routes
});

export default router;
