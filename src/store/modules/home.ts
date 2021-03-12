import { CATEGORY_TYPES, IHomeState } from "./../../typings/home";
import { Module } from "vuex";
import { IGlobalState } from "..";

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
};

const home: Module<IHomeState, IGlobalState> = {
    namespaced: true,
    state,
};

export default home;
