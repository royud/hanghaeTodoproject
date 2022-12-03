import { createStore } from "redux";
import { combineReducers } from "redux";

import todos from "../modules/todos";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  todos,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"],
};

const store = createStore(persistReducer(persistConfig, rootReducer));

export default store;
