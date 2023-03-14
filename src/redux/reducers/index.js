import { combineReducers } from 'redux';
import { prodReducer } from "./prodReducer";


const reducers = combineReducers({
    allProducts: prodReducer,
})

export default reducers;