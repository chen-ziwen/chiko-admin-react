import { type Theme, presetWind3 } from '@unocss/preset-wind3';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import { defineConfig } from '@unocss/vite';
import { presetChikoAdmin } from "@ca/uno-preset";

export default defineConfig<Theme>({
    content: {
        pipeline: {
            exclude: ["node_modules", "dist"],
        }
    },
    theme: {
        fontSize: {
            'icon-xs': '0.875rem',
            'icon-small': '1rem',
            icon: '1.125rem',
            'icon-large': '1.5rem',
            'icon-xl': '2rem'
        }
    },
    shortcuts: { 'card-wrapper': 'rd-8px shadow-sm' },
    presets: [presetWind3({ dark: 'class' }), presetChikoAdmin()],
    transformers: [transformerDirectives(), transformerVariantGroup()],
})