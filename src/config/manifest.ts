import config from './index';

export default {
    name: config.name,
    description: config.description,
    short_name: config.name,
    start_url: '/',
    display: "fullscreen",
    theme_color: '#ffffff',
    background_color: "#ffffff",
    icons: [
        {
            src: 'pwa/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
            purpose: "any",
        },
        {
            src: 'pwa/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
            purpose: "maskable",
        },
        {
            src: 'pwa/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: "any",
        },
        {
            src: 'pwa/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: "maskable",
        },
        {
            src: 'pwa/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "any",
        },
        {
            src: 'pwa/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "maskable",
        },
    ]
}
