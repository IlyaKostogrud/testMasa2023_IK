import './App.css';
import {useState} from "react";
import CounterFunc from "./components/CounterFunc";
import CounterClass from "./components/CounterClass";

function App() {

    const [value, setValue] = useState('Text in input')


    return (
        <div className="App">
            <CounterFunc/>
            <CounterFunc/>
            <CounterClass/>
            <CounterClass/>
            <h2>{value}</h2>
            <input
                type="text"
                defaultValue={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
}

export default App;