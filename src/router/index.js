import { createMemoryHistory, createRouter } from "vue-router";
import Home from '@/pages/Home.vue';
import Profile from '@/pages/Profile.vue';
import Liked from '@/pages/Liked.vue';
import Settings from '@/pages/Settings.vue';
import Contact from '@/pages/Contact.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/liked',
        component: Liked
    },
    {
        path: '/settings',
        component: Settings
    },
    {
        path: '/contact',
        component: Contact
    },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes
});


