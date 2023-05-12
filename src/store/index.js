import {configureStore} from "@reduxjs/toolkit"
import RootReducer from "./reducers/RootReducer"
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist"

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

const store = configureStore({
    reducer: persistedReducer
})

const persistor = persistStore(store)

export {store, persistor}





















// import {configureStore} from "@reduxjs/toolkit"
// import {persistReducer, persistStore} from "redux-persist"
// import storage from "redux-persist/lib/storage"


// // import CounterReducer from "./reducers/CounterReducer"
// import RootReducer from "./reducers/RootReducer"

// // Yeh samjh nhi aa raha kaha sy aaya tha
// // import persistReducer from "redux-persist/es/persistReducer";

// const persistConfig = {
//     key: "root",
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, RootReducer)

// const store = configureStore({
//     reducer: persistedReducer
// })

// const persistor = persistStore(store)


// export {store, persistor}