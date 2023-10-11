import {defineStore} from 'pinia';

const useUserStore = defineStore('user', {
    state: () => ({
        token: ''
    }),
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
