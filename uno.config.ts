import { type Theme, presetWind3 } from '@unocss/preset-wind3';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import { defineConfig } from '@unocss/vite';

// import { presetChikoAdmin } from '~/build';

export default defineConfig<Theme>({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist']
    }
  },
  presets: [presetWind3({ dark: 'class' }) /* presetChikoAdmin() */],
  shortcuts: { 'card-wrapper': 'rd-8px shadow-sm' },
  theme: {
    fontSize: {
      icon: '1.125rem',
      'icon-large': '1.5rem',
      'icon-small': '1rem',
      'icon-xl': '2rem',
      'icon-xs': '0.875rem'
    }
  },
  transformers: [transformerDirectives(), transformerVariantGroup()]
});
