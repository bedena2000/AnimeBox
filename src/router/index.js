import { createMemoryHistory, createRouter } from "vue-router";
import Home from '@/pages/Home.vue';
import Profile from '@/pages/Profile.vue';
import Liked from '@/pages/Liked.vue';
import Settings from '@/pages/Settings.vue';
import Contact from '@/pages/Contact.vue';
import Anime from "@/pages/Anime.vue";
import Login from "@/components/LoginPage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import Search from "@/pages/Search.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/profile',
        component: Profile,
        children: [
            {
                path: '',
                component: Login
            },
            {
                path: 'register',
                component: RegisterPage
            }
        ]
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
    {
        path: '/anime/:id',
        component: Anime
    },
    {
        path: '/search/:searchParam',
        component: Search

    }
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes
});


