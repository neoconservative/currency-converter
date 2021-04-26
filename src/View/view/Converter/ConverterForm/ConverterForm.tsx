import * as React from 'react';
import {CURRENCY_TYPE} from "../../../../const/currency";
import {getStringToFixed} from "../../../../helpers/currency";
import './ConverterForm.css'
import Input from "../../../../components/Input/Input";
import Select from "../../../../components/Select/Select";

interface Props {
    currencies: any[];
    onConverted: (state: State) => void;
}

interface State {
    to: {
        currency: string,
        value: number
    },
    from: {
        currency: string,
        value: number
    }
}

export class ConverterForm extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            to: {
                currency: 'RUB',
                value: 0
            },
            from: {
                currency: 'USD',
                value: 0
            }
        };
    }

    conversionRateFrom = (currentValueFrom) => {
        const { to, from } = this.state;
        const { currencies } = this.props;
        let newToValue;
        const copyTo = {...to};
        const currencyTo = currencies.find(currency => currency.type === to.currency);
        const currencyValueTo = currencyTo ? currencyTo.value : '0';
        const currencyFrom = currencies.find(currency => currency.type === from.currency);
        const currencyValueFrom = currencyFrom ? currencyFrom.value : '0';

        switch (true) {
            case from.currency === CURRENCY_TYPE.RUB:
                newToValue = currentValueFrom / currencyValueTo;
                copyTo.value = getStringToFixed(newToValue);

                this.setState({
                    to: copyTo
                });
                break;
            case to.currency === CURRENCY_TYPE.RUB:
                newToValue = currentValueFrom * currencyValueFrom;
                copyTo.value = getStringToFixed(newToValue);

                this.setState({
                    to: copyTo
                });
                break;
            default:
                newToValue = (currencyValueFrom / currencyValueTo) * currentValueFrom;
                copyTo.value = getStringToFixed(newToValue);
                this.setState({
                    to: copyTo
                });
                break;
        }
    };


    conversionRateTo = (currentValueTo) => {
        const { to, from } = this.state;
        const { currencies } = this.props;
        let newFromValue;
        const copyFrom = {...from};
        const currencyTo = currencies.find(currency => currency.type === to.currency);
        const currencyValueTo = currencyTo ? currencyTo.value : '0';
        const currencyFrom = currencies.find(currency => currency.type === from.currency);
        const currencyValueFrom = currencyFrom ? currencyFrom.value : '0';

        switch (true) {
            case to.currency === CURRENCY_TYPE.RUB:
                newFromValue = currentValueTo / currencyValueFrom;
                copyFrom.value = getStringToFixed(newFromValue);

                this.setState({
                    from: copyFrom
                });
                break;
            case from.currency === CURRENCY_TYPE.RUB:
                newFromValue = currentValueTo * currencyValueTo;
                copyFrom.value = getStringToFixed(newFromValue);

                this.setState({
                    from: copyFrom
                });
                break;
            default:
                newFromValue = (currencyValueTo / currencyValueFrom) * currentValueTo;
                copyFrom.value = getStringToFixed(newFromValue);
                this.setState({
                    from: copyFrom
                });
                break;
        }
    };

    onChangeInputTo = (event) => {
        const { value } = event.target;
        const { to } = this.state;
        const re = /^[0-9\b.]+$/;
        if ((value == '' || re.test(value))) {
            const copyTo = {...to};
            copyTo.value = value;

            this.setState({
                to: copyTo
            });

            this.conversionRateTo(value);

            this.props.onConverted(this.state)
        }
    };



    onChangeInputFrom = (event) => {
        const { value } = event.target;
        const { from, to } = this.state;
        const re = /^[0-9\b.]+$/;

        if ((value == '' || re.test(value))) {
            const copyFrom = {...from};
            copyFrom.value = value;

            this.setState({
                from: copyFrom
            });

            this.conversionRateFrom(value);
            this.props.onConverted(this.state)

        }
    };


    onChangeSelectTo = (event) => {
        const currency = event.target.value;

        const { to, from } = this.state;
        const copyTo = {...to};
        const copyFrom = {...from};
        copyTo.currency = currency;
        copyTo.value = 0;
        copyFrom.value = 0;

        this.setState({
            to: copyTo,
            from: copyFrom,
        })
    };

    onChangeSelectFrom = (event) => {
        const currency = event.target.value;
        const { from, to } = this.state;

        const copyFrom = {...from};
        const copyTo = {...to};
        copyFrom.currency = currency;
        copyFrom.value = 0;
        copyTo.value = 0;

        this.setState({
            from: copyFrom,
            to: copyTo
        })
    };

    render() {
        const { to, from } = this.state;
        const { currencies } = this.props;

        return (
            <div className="formBlockWrapper">
                <form>
                    <div className="">
                        <div className="formBlock">
                            <Input value={to.value} name="inputTo" onChange={this.onChangeInputTo}/>
                            <Select defaultValue={to.currency} currencies={currencies} onChangeSelect={this.onChangeSelectTo}/>
                        </div>
                        <div className="formBlock">
                            <Input value={from.value} name="inputFrom" onChange={this.onChangeInputFrom}/>
                            <Select defaultValue={from.currency} currencies={currencies} onChangeSelect={this.onChangeSelectFrom}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
