import type { App, Plugin } from "vue";

import Button from "./components/Button/Button.vue";
import Input from "./components/Input/Input.vue";
import Card from "./components/Card/Card.vue";

const components = [Button, Input, Card];

const BeautifyUI: Plugin = {
  install(app: App) {
    components.forEach((component) => {
      if (component.name) {
        app.component(component.name, component);
      }
    });
  },
};

export { Button, Input, Card };

export default BeautifyUI;
