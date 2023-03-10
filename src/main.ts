import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import applyPrototypes from "./helpers/applyPrototypes";

const app = createApp(App)
applyPrototypes(app.config.globalProperties);
app.mount('#app')
app.use(createPinia());
