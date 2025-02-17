import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//importing icons 
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';


// Import specific icons from the brands package
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import './index.css'

// Add the icons to the library
library.add(faFacebook, faTwitter, faInstagram);
import VueLazyload from 'vue-lazyload';




// Import Bootstrap and Datepicker CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';

// Import Bootstrap JS and Datepicker JS

import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Includes Popper.js



import '@/assets/css/animate.css';
import '@/assets/css/flaticon.css';
import '@/assets/css/jquery.timepicker.css';
import '@/assets/css/magnific-popup.css';
import '@/assets/css/owl.carousel.min.css';
import '@/assets/css/owl.theme.default.min.css';
import '@/assets/css/style.css';

  
const app = createApp(App)
app.use(VueLazyload);

// Register FontAwesomeIcon as a global component
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
