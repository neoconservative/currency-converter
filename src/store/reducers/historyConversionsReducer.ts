import {
    HistoryConversionsAction,
    HistoryConversionsActionTypes,
    HistoryConversionsState
} from "../../types/historyConversions";

export const initialState = {
    historyConversions: [],
};

export const historyConversionsReducer = (state = initialState, action: HistoryConversionsAction): HistoryConversionsState => {
    switch (action.type) {
        case HistoryConversionsActionTypes.PUSH_HISTORY_CONVERSIONS:
            return {historyConversions: action.payload};
        default:
            return state;
    }
};