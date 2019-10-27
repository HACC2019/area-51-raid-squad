
import Pageslogin from './containers/MainContent/pages/pages-login';
import Pagesregister from './containers/MainContent/pages/pages-register';

const authroutes = [
    { path: '/login', component: Pageslogin, route : public  },
    { path: '/register', component: Pagesregister, route : public },
];

export default authroutes;