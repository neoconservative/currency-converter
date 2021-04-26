import React from 'react';
import "./Select.css"

interface Props {
    defaultValue: string,
    onChangeSelect: (event) => void
    currencies: any[]
}

const Select: React.FC<Props> = (props) => {

    function renderOptions() {
        const { currencies } = props;
        const currenciesOptions = currencies.map((currency, index) => {
            return (
                <option key={index} value={currency.type}>
                    {currency.name}
                </option>
            );
        });

        return currenciesOptions
    }

    return (
        <select
            className=""
            onChange={props.onChangeSelect}
            defaultValue={props.defaultValue}
        >
            {renderOptions()}
        </select>
    );
};

export default Select;