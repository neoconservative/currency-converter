import {combineReducers} from "redux";
import {currencyReducer} from "./currencyReducer";
import {historyConversionsReducer} from "./historyConversionsReducer";

export const rootReducer = combineReducers({
    currency: currencyReducer,
    historyConversions: historyConversionsReducer
});

export type RootState = ReturnType<typeof rootReducer>