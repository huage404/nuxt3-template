import { UseFetchOptions } from "nuxt/app"
import { KeysOf } from "nuxt/dist/app/composables/asyncData"
import config from '~/config/index'
import useUserStore from "~/stores/userStore"
import { useMessage } from 'naive-ui'

interface IBaseResponse<T> {
    msg: string;
    code: number;
    data?: T
}

const request = <T>(url: string, options?: UseFetchOptions<unknown, unknown, KeysOf<unknown>, null, string, "get">) => {
    const userStore = useUserStore();
    const message = useMessage();

    const reqUrl = url.indexOf('http') > -1 ? url : config.baseUrl + url

    if (!options){
        options = {}
    }
    options.headers = {
        'Authorization': userStore.token
    }

    return new Promise((resolve, reject) => {
        useFetch(reqUrl, { ...options }).then(({ data, error }) => {
            if(error.value){
                message.error('网络错误');
                reject(error.value);
                return;
            }

            const res = data.value as IBaseResponse<T>;
            if(res.code !== 0){
                handleResponseError(res)
            }

            resolve(res);
        }).catch(error => {
            message.error('网络错误');
            reject(error);
        })
    })
}

const handleResponseError = (response: IBaseResponse<any>) => {
    const message = useMessage();
    const userStore = useUserStore();

    switch(response.code){
        case 401: 
            message.error('登录信息过期');
            userStore.logout();
            break;
        default:
            break;
    }
}

export default request;