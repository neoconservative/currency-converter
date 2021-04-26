import {Dispatch} from "redux";
import axios from "axios";
import {CurrencyAction, CurrencyActionTypes} from "../../types/currencies";
import {getCurrenciesArray} from "../../helpers/currency";

export const fetchCurrencies = () => {
    return async (dispatch: Dispatch<CurrencyAction>) => {
        try {
            dispatch({type: CurrencyActionTypes.FETCH_CURRENCIES});
            const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');

            //   simulating the server operation
            setTimeout(() => {
                dispatch({type: CurrencyActionTypes.FETCH_CURRENCIES_SUCCESS, payload: getCurrenciesArray(response.data)})
            }, 500)
        } catch (e) {
            dispatch({
                type: CurrencyActionTypes.FETCH_CURRENCIES_ERROR,
                payload: 'Error'
            })
        }
    }
};