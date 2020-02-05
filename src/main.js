import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { Button, Modal } from "buefy";

import "buefy/dist/buefy.css";

Vue.use(Button);
Vue.use(Modal);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
