//combineReducer --> If we have mul reducers we have to combine all that reducers and
//  give that combined reducers. (it is a funtion) which takes Obj as an argument  
// and register all reducers in the obj. Ex: combineReducers({textReducer, inputreducer})
//redux is providing a pre-defined method called applymiddeleware & import it and pass it as a second argument to the store
//when we import logger we have to pass logger as a 1st argument to the middleware "applyMiddleware(logger)"

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import textReducer from "../Reducer/textreducer";
//combine all reducers with combineReducers() method.
const combineReducer = combineReducers({ textReducer })

//we have to "register the reeducer" with the "redux store" by passing like a first "argument" to "createstore"
const myStore = createStore(combineReducer, applyMiddleware(logger))

export default myStore  