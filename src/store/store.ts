import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import exampleReducer from "@/store/exampleSlice";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, exampleReducer);

const store = configureStore({
    reducer: {
        count: persistedReducer,
    },
    // 직렬화 가능성 체크 해제
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

const rootReducer = combineReducers({
    count: exampleReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export { store, persistor };
