import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux"
import { hotelsReducer } from "./hotels/hotels.reducer"
import thunk from "redux-thunk"

const rootReducer=combineReducers({
    hotels:hotelsReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
