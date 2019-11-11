import Dashboard from './containers/MainContent/dashboard/dashboard';

import ChartApex from './containers/MainContent/charts/charts-apex';
import ChartEchart from './containers/MainContent/charts/charts-echart';
import ChartChartist from './containers/MainContent/charts/charts-chartist';
import ChartChartjs from './containers/MainContent/charts/charts-chartjs';
import ChartKnob from './containers/MainContent/charts/charts-knob';
import ChartSparkline from './containers/MainContent/charts/charts-sparkline';

import EmailInbox from './containers/MainContent/email/email-inbox';
import EmailRead from './containers/MainContent/email/email-read';
import EmailCompose from './containers/MainContent/email/email-compose';

import Calendar from './containers/MainContent/calendar/calendar';

import Ecommerceproducts from './containers/MainContent/ecommerce/ecommerce-products';
import Ecommerceproductslist from './containers/MainContent/ecommerce/ecommerce-products-list';
import Ecommerceorderhistory from './containers/MainContent/ecommerce/ecommerce-order-history';
import Ecommercecustomers from './containers/MainContent/ecommerce/ecommerce-customers';
import Ecommerceproductedit from './containers/MainContent/ecommerce/ecommerce-product-edit';

import Charger_Status from './containers/MainContent/charger_status/charger_status';
import Charger_Reports from './containers/MainContent/charger_reports/charger_reports';

import Pageslogin2 from './containers/MainContent/pages/pages-login-2';
import Pagesregister2 from './containers/MainContent/pages/pages-register-2';
import Pagesrecoverpw2 from './containers/MainContent/pages/pages-recoverpw-2';
import pageslockscreen2 from './containers/MainContent/pages/pages-lock-screen-2';

import Pageslogin from './containers/MainContent/Auth/Login';
import Logout from './containers/MainContent/Auth/Logout';
import Pagesregister from './containers/MainContent/Auth/Register';
import ForgetPassword from './containers/MainContent/Auth/ForgetPassword';
import ResetPassword from './containers/MainContent/Auth/ResetPassword';

import Pagesblank from './containers/MainContent/pages/pages-blank';
import Pagestimeline from './containers/MainContent/pages/pages-timeline';
import Pagesinvoice from './containers/MainContent/pages/pages-invoice';
import Pagespricing from './containers/MainContent/pages/pages-pricing';
import Pagesmaintenance from './containers/MainContent/pages/pages-maintenance';
import Pagesfaq from './containers/MainContent/pages/pages-faq';
import Pages404 from './containers/MainContent/pages/pages-404';
import Pages500 from './containers/MainContent/pages/pages-500';

import Emailtemplatebasic from './containers/MainContent/email/email-template-basic';
import Emailtemplatealert from './containers/MainContent/email/email-template-alert';
import Emailtemplatebilling from './containers/MainContent/email/email-template-billing';

import Uialerts from './containers/MainContent/ui/ui-alerts';
import Uibuttons from './containers/MainContent/ui/ui-buttons';
import Uicards from './containers/MainContent/ui/ui-cards';
import Uicarousel from './containers/MainContent/ui/ui-carousel';
import Uigeneral from './containers/MainContent/ui/ui-general';
import Uigrid from './containers/MainContent/ui/ui-grid';
import Uiimages from './containers/MainContent/ui/ui-images';
import Uilightbox from './containers/MainContent/ui/ui-lightbox';
import Uimodals from './containers/MainContent/ui/ui-modals';
import Uirangeslider from './containers/MainContent/ui/ui-rangeslider';
import Uisweetalert from './containers/MainContent/ui/ui-sweet-alert';
import Uitabsaccordions from './containers/MainContent/ui/ui-tabs-accordions';
import Uitypography from './containers/MainContent/ui/ui-typography';

import Formelements from './containers/MainContent/form/form-elements';
import Formvalidation from './containers/MainContent/form/form-validation';
import Formadvanced from './containers/MainContent/form/form-advanced';
import Formeditors from './containers/MainContent/form/form-editors';
import Formuploads from './containers/MainContent/form/form-uploads';
import Formxeditable from './containers/MainContent/form/form-xeditable';
import Formwizard from './containers/MainContent/form/form-wizard';
import Formmask from './containers/MainContent/form/form-mask';

import Tablebasic from './containers/MainContent/tables/tables-basic';
import Tabledatatable from './containers/MainContent/tables/tables-datatable';
import Tableresponsive from './containers/MainContent/tables/tables-responsive';
import Tableseditable from './containers/MainContent/tables/tables-editable';

import Iconsmaterial from './containers/MainContent/icons/icons-material';
import Iconsfontawesome from './containers/MainContent/icons/icons-fontawesome';
import Iconsion from './containers/MainContent/icons/icons-ion';
import Iconsthemify from './containers/MainContent/icons/icons-themify';
import Iconsdripicons from './containers/MainContent/icons/icons-dripicons';

import Mapsgoogle from './containers/MainContent/maps/maps-google';
import Mapsvector from './containers/MainContent/maps/maps-vector';

const routes = [

    // public Routes
    { path: '/login', component: Pageslogin, ispublic: true },
    { path: '/logout', component: Logout, ispublic: true },
    { path: '/register', component: Pagesregister, ispublic: true },
    { path: '/forget-password', component: ForgetPassword, ispublic: true },
    { path: '/reset-password', component: ResetPassword, ispublic: true },

    { path: '/charts-apex', component: ChartApex },
    { path: '/charts-echart', component: ChartEchart },
    { path: '/charts-chartist', component: ChartChartist },
    { path: '/charts-chartjs', component: ChartChartjs },
    { path: '/charts-knob', component: ChartKnob },
    { path: '/charts-sparkline', component: ChartSparkline },

    { path: '/email-inbox', component: EmailInbox },
    { path: '/email-read', component: EmailRead },
    { path: '/email-compose', component: EmailCompose },

    { path: '/calendar', component: Calendar },

    { path: '/ecommerce-products', component: Ecommerceproducts },
    { path: '/ecommerce-products-list', component: Ecommerceproductslist },
    { path: '/ecommerce-order-history', component: Ecommerceorderhistory },
    { path: '/ecommerce-customers', component: Ecommercecustomers },
    { path: '/ecommerce-product-edit', component: Ecommerceproductedit },
    { path: '/charger_status', component: Charger_Status },
    { path: '/charger_reports', component: Charger_Reports },

    { path: '/pages-login-2', component: Pageslogin2 },
    { path: '/pages-register-2', component: Pagesregister2 },
    { path: '/pages-recoverpw-2', component: Pagesrecoverpw2 },
    { path: '/pages-lock-screen-2', component: pageslockscreen2 },

    { path: '/pages-blank', component: Pagesblank },
    { path: '/pages-timeline', component: Pagestimeline },
    { path: '/pages-invoice', component: Pagesinvoice },
    { path: '/pages-pricing', component: Pagespricing },
    { path: '/pages-maintenance', component: Pagesmaintenance },
    { path: '/pages-faq', component: Pagesfaq },
    { path: '/pages-404', component: Pages404 },
    { path: '/pages-500', component: Pages500 },

    { path: '/email-template-basic', component: Emailtemplatebasic },
    { path: '/email-template-alert', component: Emailtemplatealert },
    { path: '/email-template-billing', component: Emailtemplatebilling },

    { path: '/ui-alerts', component: Uialerts },
    { path: '/ui-buttons', component: Uibuttons },
    { path: '/ui-cards', component: Uicards },
    { path: '/ui-carousel', component: Uicarousel },
    { path: '/ui-general', component: Uigeneral },
    { path: '/ui-grid', component: Uigrid },
    { path: '/ui-images', component: Uiimages },
    { path: '/ui-lightbox', component: Uilightbox },
    { path: '/ui-modals', component: Uimodals },
    { path: '/ui-rangeslider', component: Uirangeslider },
    { path: '/ui-sweet-alert', component: Uisweetalert },
    { path: '/ui-tabs-accordions', component: Uitabsaccordions },
    { path: '/ui-typography', component: Uitypography },

    { path: '/form-elements', component: Formelements },
    { path: '/form-validation', component: Formvalidation },
    { path: '/form-advanced', component: Formadvanced },
    { path: '/form-editors', component: Formeditors },
    { path: '/form-uploads', component: Formuploads },
    { path: '/form-xeditable', component: Formxeditable },
    { path: '/form-wizard', component: Formwizard },
    { path: '/form-mask', component: Formmask },

    { path: '/tables-basic', component: Tablebasic },
    { path: '/tables-datatable', component: Tabledatatable },
    { path: '/tables-responsive', component: Tableresponsive },
    { path: '/tables-editable', component: Tableseditable },

    { path: '/icons-material', component: Iconsmaterial },
    { path: '/icons-fontawesome', component: Iconsfontawesome },
    { path: '/icons-ion', component: Iconsion },
    { path: '/icons-themify', component: Iconsthemify },
    { path: '/icons-dripicons', component: Iconsdripicons },

    { path: '/maps-google', component: Mapsgoogle },
    { path: '/maps-vector', component: Mapsvector },

    { path: '/layout-collapsed-sidebar', component: Dashboard },
    { path: '/layout-light-sidebar', component: Dashboard },

    { path: '/dashboard', component: Dashboard },
    { path: '/', component: Pageslogin },

];

export default routes;