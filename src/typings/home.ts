export enum CATEGORY_TYPES {
    ALL,
    REACT,
    VUE,
    NODE
}


interface ISlider {
    url: string
}

interface ILesson {
    title: string,
    video: string,
    poster: string,
    price: number,
    category?: string
}

interface ILessons {
    hasMore: Boolean;
    loading: Boolean;
    offset: number;
    limit: number;
    list: ILesson[];
}

export interface IHomeState {
    currentCategory: CATEGORY_TYPES;
    sliders: ISlider[];
    lessons: ILessons;
}