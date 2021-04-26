export interface UserState {
    currencies: any[];
    loading: boolean;
    error: null | string;
}

export enum CurrencyActionTypes {
    FETCH_CURRENCIES = 'FETCH_CURRENCIES',
    FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS',
    FETCH_CURRENCIES_ERROR = 'FETCH_CURRENCIES_ERROR',
}

export interface FetchCurrenciesAction {
    type: CurrencyActionTypes.FETCH_CURRENCIES;
}

export interface FetchCurrenciesSuccessAction {
    type: CurrencyActionTypes.FETCH_CURRENCIES_SUCCESS;
    payload: any[]
}

export interface FetchCurrenciesErrorAction {
    type: CurrencyActionTypes.FETCH_CURRENCIES_ERROR;
    payload: string
}

export type CurrencyAction = FetchCurrenciesAction | FetchCurrenciesSuccessAction | FetchCurrenciesErrorAction;
