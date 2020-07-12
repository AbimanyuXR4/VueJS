import Vue from 'vue';
import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent'
import SiswaIndex from './views/SiswaIndex';
import SiswaCreate from './views/SiswaCreate'


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: '/', component: ExampleComponent,},
        {path: '/siswas', component: SiswaIndex},
        {path: '/siswas/create', component: SiswaCreate}
    ],
    mode: 'history'
})