
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import '@/scss/style.scss';
import {
  BLUE_THEME,
} from "@/theme/LightTheme";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "BLUE_THEME",
      themes: {
        BLUE_THEME,
      },
    },
    defaults: {
      VBtn: {},
      VCard: {
          rounded: 'md'
      },
      VTextField: {
          rounded: 'lg'
      },
      VTooltip: {
          location: 'top'
      }
  }
  });
  nuxtApp.vueApp.use(vuetify);
  nuxtApp.vueApp.use(PerfectScrollbar);
  nuxtApp.vueApp.use(VueApexCharts);
  nuxtApp.vueApp.use(VueTablerIcons);
});

