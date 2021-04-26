import React from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import "./Converter.css"
import {ConverterForm} from "./ConverterForm/ConverterForm";
import {useDispatch} from "react-redux";
import {setHistoryConversions} from "../../../store/action-creators/historyConversions";

const Converter: React.FC = () => {
    const {currencies} = useTypedSelector(state => state.currency);
    const {historyConversions} = useTypedSelector(state => state.historyConversions);
    const dispatch = useDispatch();

    function onConverted(historyConversion) {
        let historyConversionsCopy = [...historyConversions || []];
        if (historyConversions && historyConversionsCopy.length >= 10) {
            historyConversionsCopy.splice(0, 1);
        }

        historyConversionsCopy.push(historyConversion);
        dispatch(setHistoryConversions(historyConversionsCopy));
    }

    return (
        <div className="converter">
            <div className="converterNameBlock">
                <div className="converterNameBlockTitleImg">
                    <img src="/dist/asset/images/world.png" alt={'World'} />
                </div>
                <div className="converterNameBlockTitleText">
                    Курс валют
                </div>
            </div>
            <div className='converterWrapper'>
                <div className="converterCover">
                    <div className="converterText">
                        Конвертер валют
                    </div>
                    <div className="">
                        <ConverterForm currencies={currencies} onConverted={onConverted}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Converter;