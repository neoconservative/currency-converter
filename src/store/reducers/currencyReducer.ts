import {CurrencyAction, CurrencyActionTypes, UserState} from "../../types/currencies";

export const initialState = {
  currencies: [],
  loading: false,
  error: null
};

export const currencyReducer = (state = initialState, action: CurrencyAction): UserState => {
    switch (action.type) {
        case CurrencyActionTypes.FETCH_CURRENCIES:
            return {loading: true, error: null, currencies: []};
        case CurrencyActionTypes.FETCH_CURRENCIES_SUCCESS:
            return {loading: false, error: null, currencies: action.payload};
        case CurrencyActionTypes.FETCH_CURRENCIES_ERROR:
            return {loading: false, error: action.payload, currencies: []};
        default:
            return state;
    }
};