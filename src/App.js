import './App.css';
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0)

    function increment() {
        return count += 1;
    }

    function decrement() {
        return count -= 1;
    }

    return (
        <div className="App">
            <div>{`Amount = ${count}`}</div>
            <button onClick={increment}>Plus 1
            </button>
            <button onClick={decrement}>Minus 1
            </button>
        </div>
    );
}

export default App;