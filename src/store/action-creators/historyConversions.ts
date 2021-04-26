import {Dispatch} from "redux";
import {HistoryConversionsAction, HistoryConversionsActionTypes} from "../../types/historyConversions";

export const setHistoryConversions = (payload) => {
    return (dispatch: Dispatch<HistoryConversionsAction>) => {
        dispatch({type: HistoryConversionsActionTypes.PUSH_HISTORY_CONVERSIONS, payload: payload})
    }
};