import manifestConfig from '~/config/manifest';

const registerManifest = () => {
    onMounted(() => {
        const baseUrl = window.location.origin;
        const manifest = {
            ...manifestConfig
        }
        const regex = /^(http|https|ftp):\/\/[^ "]+$/;

        /**
         * 在这里，可以手动向 start_url 注入一些参数，例如邀请码之类的
         */
        if(!regex.test(manifest.start_url)){
            manifest.start_url = `${baseUrl}/${manifest.start_url}`
        }
        manifest.icons.forEach(item => {
            if(!regex.test(item.src)){
                item.src = `${baseUrl}/${item.src}`
            }
        })

        useHead({
            link: [
                {
                    rel: 'manifest',
                    href: URL.createObjectURL(new Blob([JSON.stringify(manifest)], {type: 'application/json'}))
                }
            ]
        })
    })
}

export default registerManifest;
