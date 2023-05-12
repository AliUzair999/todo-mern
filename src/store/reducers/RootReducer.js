import {combineReducers} from "@reduxjs/toolkit"
import CounterReducer from "./CounterReducer"

const RootReducer = combineReducers({
    CounterReducer: CounterReducer
})

export default RootReducer