import React from 'react';
import "./Input.css"

interface Props {
    value: number,
    name: string,
    onChange: (event) => void

}

const Input: React.FC<Props> = (props) => {

    return (
            <input type="text" value={props.value} name="inputTo" onChange={props.onChange} />
    );
};

export default Input;