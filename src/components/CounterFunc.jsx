import React, {useState} from 'react';

const CounterFunc = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>{`CounterFunc = ${count}`}</h2>
            <button onClick={increment}>+ 1</button>
            <button onClick={decrement}>- 1</button>
        </div>
    );
};

export default CounterFunc;