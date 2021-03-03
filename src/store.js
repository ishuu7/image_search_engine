import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';


import {
    resultingPhotos,
    queryChange
} from './reducers/searchPhotos';

const reducer = combineReducers({
    resultingPhotos,
    queryChange
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store;