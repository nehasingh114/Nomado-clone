import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' ;
 
import { singleHotelReducer } from "./singleHotel/singleHotel.reducer";

const rootReducer = combineReducers({
    singleHotel: singleHotelReducer
})

const persistConfig = {
    key: 'root',
    storage,
}
   
const persistedReducer = persistReducer(persistConfig, rootReducer)
  
export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store)