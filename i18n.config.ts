import zhCN from '~/locales/zhCN.json';
import enUS from '~/locales/enUS.json';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'zhCN',
    messages: {
        zhCN,
        enUS
    }
}))
