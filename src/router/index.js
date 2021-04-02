import Vue from 'vue'
import VueRouter from 'vue-router';
import Chat from '../components/Chat.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
    name: 'Chat',
    path:'/',
    component : Chat
    }
    ]
})
