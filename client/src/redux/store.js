import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import { singleHotelReducer } from "./singleHotel/singleHotel.reducer";
import { authReducer } from "./auth/auth.reducer";
import { hotelsReducer } from "./hotels/hotels.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    singleHotel: singleHotelReducer,
    hotels:hotelsReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store)