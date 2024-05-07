import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faYoutube,faTwitter,faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faYoutube,faTwitter,faFacebook,faInstagram);

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(router)

app.mount('#app')
