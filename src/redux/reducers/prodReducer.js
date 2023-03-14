import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products: [
        {
            id: 1,
            title: "Jones Half print",
            category: "Shirts",
        },
    ],
};


export const prodReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PROD:
            return state;
        default:
            return state;
    }
};

