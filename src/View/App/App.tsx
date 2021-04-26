import CurrencyRate from "../view/CurrencyRate/CurrencyRate";
import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css'
import {useDispatch} from "react-redux";
import {fetchCurrencies} from "../../store/action-creators/currencies";
import Converter from "../view/Converter/Converter";

export const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrencies());
    }, []);

    return (
    <Router>
            <Switch>
                <Route path="/converter">
                    <Converter />
                </Route>
                <Route path="/">
                    <CurrencyRate />
                </Route>
            </Switch>
    </Router>
    );
};