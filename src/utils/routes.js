import Login from '../pages/Login';
import Register from '../pages/Register';
import BlogList from '../pages/BlogList';

export default [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/blogs',
        component: BlogList,
    },
];
