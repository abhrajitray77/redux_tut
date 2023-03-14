import { ActionTypes } from "../constants/actionTypes";

export const setProd = (products) => {
    return {
        type: ActionTypes.SET_PROD,
        payload: products,
    };
};

export const selectedProd = (product) => {
    return {
        type: ActionTypes.SELECTED_PROD,
        payload: product,
    };
};