export interface HistoryConversionsState {
    historyConversions: any[]
}

export enum HistoryConversionsActionTypes {
    PUSH_HISTORY_CONVERSIONS = 'PUSH_HISTORY_CONVERSIONS',
}

export interface PushHistoryConversionsAction {
    type: HistoryConversionsActionTypes.PUSH_HISTORY_CONVERSIONS;
    payload: any[]
}

export type HistoryConversionsAction = PushHistoryConversionsAction;
