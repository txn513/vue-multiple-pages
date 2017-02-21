import Vue from 'vue'

import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import 'assets/css/test.css'
import 'assets/css/testtwo.css'
import App from './app.vue'

Vue.use(ElementUI)



new Vue({
  el: '#app',
  components: { App },
})
