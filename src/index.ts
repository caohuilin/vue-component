import Vue from 'vue'
import { BaseComponent } from '@qn-pandora/visualization-sdk'
import App from './App.vue';

export default class CustomComponent extends BaseComponent {
  render() {
    new Vue({
      render: (h) => h(App),
    }).$mount("#app");
  }
}


