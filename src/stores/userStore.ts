import {defineStore} from 'pinia';

const useUserStore = defineStore('user', {
    state: () => ({
        token: '',
    }),
    getters: {
        permission: (): `${string}:${string}:${string}`[] => {
            return []
        }
    },
    actions: {
        setToken(token: string) {
            this.token = token;
        },

        logout(){
            this.setToken('');
        }
    }
})

export default useUserStore;
