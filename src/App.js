import './styles/App.css';
import CounterFunc from "./components/CounterFunc";
import CounterClass from "./components/CounterClass";
import InputTextLineFunc from "./components/InputTextLineFunc";
import PostItem from "./components/PostItem";

function App() {




    return (
        <div className="App">
            <CounterFunc/>
            <CounterFunc/>
            <CounterClass/>
            <CounterClass/>
            <InputTextLineFunc/>
            <PostItem/>
            <PostItem/>
        </div>
    );
}

export default App;