import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// PrimeVue
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';

// PrimeVue Components
import Badge from 'primevue/badge';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import Divider from 'primevue/divider';
import FloatLabel from 'primevue/floatlabel';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import InputText from 'primevue/inputtext';
import Panel from 'primevue/panel';
import Ripple from 'primevue/ripple';
import SelectButton from 'primevue/selectbutton';
import Tag from 'primevue/tag';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

// Styles
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './assets/styles/main.css';

// ── Custom Luxury Preset ──────────────────────────────────────────────
const LuxuryPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fdf8ec',
      100: '#f9edca',
      200: '#f2d98e',
      300: '#e8be4a',
      400: '#d4a017',
      500: '#c9920f',
      600: '#b07c0d',
      700: '#8c620c',
      800: '#6e4d10',
      900: '#5a3f12',
      950: '#341f08',
    },
    colorScheme: {
      dark: {
        surface: {
          0: '#ffffff',
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d4d4d4',
          300: '#b0b0b0',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#111111',
          950: '#0a0a0a',
        },
      },
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: LuxuryPreset,
    options: {
      prefix: 'p',
      darkModeSelector: '.ecw-dark',
      cssLayer: false,
    },
  },
  ripple: true,
});
app.use(ToastService);

// Register components globally
app.component('Button', Button);
app.component('Card', Card);
app.component('Divider', Divider);
app.component('Tag', Tag);
app.component('Image', Image);
app.component('Galleria', Galleria);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('SelectButton', SelectButton);
app.component('Toast', Toast);
app.component('Badge', Badge);
app.component('Chip', Chip);
app.component('Panel', Panel);
app.component('FloatLabel', FloatLabel);

app.directive('ripple', Ripple);

app.mount('#app');
