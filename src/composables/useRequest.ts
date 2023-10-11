import {$fetch, FetchOptions} from "ofetch";
import config from '~/config';
import useUserStore from '~/stores/userStore';

const useRequest = <T>(url: string, opts?: FetchOptions<"json">): Promise<T> => {
    const authStore = useUserStore();
    const options: FetchOptions<"json"> = {
        baseURL: config.baseUrl,
        timeout: 60 * 1000,
        headers: {
            ContentType: 'application/json',
            Authorization: authStore.token
        },
        onResponseError: ({response}) => {
            onResponseError(response.status);
        },
    }

    return $fetch<T>(url, Object.assign(options, opts));
}

const onResponseError = (status: number) => {
    const authStore = useUserStore();
    switch (status) {
        case 401:
            authStore.logout();
            break;
    }
}

export default useRequest;
