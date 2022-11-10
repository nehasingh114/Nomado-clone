import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { singleHotelReducer } from "./singleHotel/singleHotel.reducer";

const rootReducer = combineReducers({
    singleHotel: singleHotelReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));