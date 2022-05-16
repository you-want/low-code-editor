import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { loadMaterials } from './utils';
import { router } from './router';
import { getMaterialRenderFun, materialList } from './data';
import './main.less';

const pinia = createPinia();

loadMaterials(materialList).then(() => {
  const app = createApp(App);
  materialList.forEach(m => {
    const renderFun = getMaterialRenderFun(m);
    app.component(m.name, renderFun);
  });
  app.use(router);
  app.use(pinia);
  app.mount('#app');
});
