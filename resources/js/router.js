import Vue from 'vue';
import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent'
import SiswaIndex from './views/SiswaIndex';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: '/', component: ExampleComponent,},
        {path: '/siswas', component: SiswaIndex}
    ],
    mode: 'history'
})