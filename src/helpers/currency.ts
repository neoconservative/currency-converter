import {CURRENCY_TYPE, VALUTES_NAME} from "../const/currency";

export function getCurrenciesArray(data) {
    const dollarType = data.Valute.USD.CharCode;
    const euroType = data.Valute.EUR.CharCode;
    const lbType = data.Valute.GBP.CharCode;

    const currencies = [
        {
            name: `${VALUTES_NAME.USD}, ${dollarType}`,
            value: data.Valute.USD.Value,
            type: dollarType
        },
        {
            name: `${VALUTES_NAME.EUR}, ${euroType}`,
            value: data.Valute.EUR.Value,
            type: euroType
        },
        {
            name: `${VALUTES_NAME.GBP}, ${lbType}`,
            value: data.Valute.GBP.Value,
            type: lbType
        },
        {
            name: VALUTES_NAME.RUB,
            value: 1,
            type: CURRENCY_TYPE.RUB
        }
    ];

    return currencies;
}

export function getStringToFixed(value) {
    return value.toFixed(4).replace(/0*$/,"");
}