import {driver, DriveStep} from 'driver.js';
import {E_LOCAL_STORAGE_KEYS} from '~/config/enums';

// driver.js 文档: https://driverjs.com/docs/configuration
const useDriver = (steps: DriveStep[], callback?: () => void) => {
    if(!process.client){
        return;
    }

    const route = useRoute();
    let history: string[] = [];
    const historyStr = localStorage.getItem(E_LOCAL_STORAGE_KEYS.GUIDE_PAGES_HISTORY);

    if(isJson(historyStr)){
        history = JSON.parse(historyStr as string);
    }

    const driverObj = driver({
        showProgress: true,
        overlayColor: '#000000',
        steps: steps,
        onDestroyStarted: () => {
            if(!history.includes(route.fullPath)){
                history.push(route.fullPath);
                localStorage.setItem(E_LOCAL_STORAGE_KEYS.GUIDE_PAGES_HISTORY, JSON.stringify(history));
            }
            if(driverObj.isLastStep()){
                callback?.();
            }
            driverObj.destroy();
        },
    });

    onMounted(() => {
        if(history.includes(route.fullPath)){
           return;
        }
        driverObj.drive();
    })
}

export default useDriver;
