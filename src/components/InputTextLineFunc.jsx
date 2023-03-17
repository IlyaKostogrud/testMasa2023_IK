import React, {useState} from 'react';

const InputTextLineFunc = () => {
    const [value, setValue] = useState('Text in input')
    return (<div>
            <h2>{value}</h2>
            <input
                type="text"
                defaultValue={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>);
};

export default InputTextLineFunc;