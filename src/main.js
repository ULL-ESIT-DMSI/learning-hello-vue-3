import { createApp } from 'vue'
import Markdown from 'vue3-markdown-it'

import App from './App.vue'

//import './assets/main.css'

let myApp = createApp(App)

myApp.use(Markdown);
myApp.mount('#app')
