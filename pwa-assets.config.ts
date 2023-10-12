import {
    defineConfig,
    Preset
} from '@vite-pwa/assets-generator/config'

const minimalPreset: Preset = {
    transparent: {
        sizes: [64, 192, 512],
        padding: 0.4
    },
    maskable: {
        sizes: [512],
        padding: 0.4
    },
    apple: {
        sizes: [180],
        padding: 0.4
    },
    png: {
        compressionLevel: 9,
        quality: 85
    }
}

export default defineConfig({
    preset: minimalPreset,
    images: ['src/public/pwa/logo.svg'],
})
