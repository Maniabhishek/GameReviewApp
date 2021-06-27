import {combineReducers} from "redux";
import {gameReducer} from "./gameReducer";
import {detailReducer} from "./detailReducer";

export const rootReducer = combineReducers({
    games:gameReducer,
    details:detailReducer,
});