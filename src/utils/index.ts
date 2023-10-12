export const isJson = (val: any) => {
    if(!val){
        return false;
    }
    try {
        JSON.parse(val);
        return true;
    }catch {
        return false;
    }
}
