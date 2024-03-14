import "vuetify/styles";
import "vuetify/dist/vuetify.min.css";
import "vuetify/dist/vuetify.min.js";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
    components,
    directives,
  });

  export default vuetify;