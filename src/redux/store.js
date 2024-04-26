import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { inspireApis } from "./InspireApis";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
  blacklist: [inspireApis.reducerPath],
};
const appReducer = combineReducers({
  [inspireApis.reducerPath]: inspireApis.reducer,
});
const rootReducer = (state, action) => {
  if (action.type == "logout") {
    console.log("logged out from store");
    state = undefined;
  }
  return appReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["ConditionalModelReducer/showModal"],
      },
    }).concat(inspireApis.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
