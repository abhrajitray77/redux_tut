import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products: [],
};


export const prodReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PROD:
            return { ...state, products: payload };
        default:
            return state;
    }

};

