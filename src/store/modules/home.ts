import { CATEGORY_TYPES, IHomeState,Icaptcha} from "./../../typings/home";
import { Module } from "vuex";
import { IGlobalState } from "..";
import * as Types from "../action-types"
import { loadCaptcha } from "@/api/login";

const state: IHomeState = {
    currentCategory: CATEGORY_TYPES.ALL,
    sliders: [],
    lessons: {
        hasMore: true,
        loading: true,
        offset: 0,
        limit: 5,
        list: [],
    },
    base64Data:{
        token:'',
        base64:''
    }
};

const home: Module<IHomeState, IGlobalState> = {
    namespaced: true,
    state,
    mutations:{
        [Types.GET_CAPTCHA](state,payload:Icaptcha){
            state.base64Data=payload;
        }
    },
    actions:{
        async [Types.GET_CAPTCHA]({commit}){
            let data  = await loadCaptcha<Icaptcha>();
            console.log(data);
            commit(Types.GET_CAPTCHA,data);
        }
    }
};

export default home;
