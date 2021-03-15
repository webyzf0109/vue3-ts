import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

axios.defaults.baseURL='/ocs_manage/mgr';

axios.interceptors.request.use((config:AxiosRequestConfig)=>{
    return config
})


axios.interceptors.response.use((response:AxiosResponse)=>{
    if(response.data.err==1){
        return Promise.reject(response.data.data)
    }
    return Promise.resolve(response.data.data)
},err=>{
    return Promise.reject(err);
})


export default axios;