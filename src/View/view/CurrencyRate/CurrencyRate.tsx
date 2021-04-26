import React from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import "./CurrencyRate.css"
import {Link} from "react-router-dom";
import {CURRENCY_TYPE} from "../../../const/currency";

const CurrencyRate: React.FC = () => {
    const {currencies, error, loading} = useTypedSelector(state => state.currency);
    const {historyConversions} = useTypedSelector(state => state.historyConversions);

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    } else {
        const currenciesWithoutRUB = currencies.filter(currency => currency.type !== CURRENCY_TYPE.RUB);
        const renderCurrencyRate = () => {
            return currenciesWithoutRUB.map((currency, index) =>
                <div key={index}>
                <div className="currencyBlockName">
                    {currency.name}
                </div>
                    <div className="currencyBlockValue">
                        {currency.value}
                    </div>
                </div>
            )
        };

    return (
        <div className="currencyRate">
            <div className="nameBlock">
                <div className="nameBlockTitleImg">
                    <img src="/dist/asset/images/world.png" alt={'World'} />
                </div>
                <div className="nameBlockTitleText">
                    Курс валют
                </div>
            </div>
            <div className="infoBlockWrapper">
                <div className="infoBlock">
                    <div className="infoBlockTitle">
                        Курс валют ЦБ РФ
                    </div>
                <div className="currenciesViewBlock">
                        {renderCurrencyRate()}
                </div>
                </div>
            </div>
            <div className="historyConversionsBlockWrapper">
            <div className="historyConversionsBlock">
                <div className="historyConversionsBlockText">
                    История конвертации
                </div>
                <div className="historyConversionsView">
                    {historyConversions.map((historyConversion, index) => {
                        return <div key={index} className="historyConversionsText">
                            {historyConversion.to.value} {historyConversion.to.currency} =
                            {historyConversion.from.value} {historyConversion.from.currency}
                            </div>
                    })}
                </div>
                <div className="buttonConversionWrapper">
                    <Link to="/converter">

                    <button className="buttonConversion">Конвертор валют</button>
                    </Link>
                </div>
                <div className="historyConversionsImg">
                    <img src="/src/asset/images/superMan.png" />
                </div>
            </div>
            </div>
        </div>
    );
    }
};

export default CurrencyRate;