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
            <PostItem post={{id:1, title:'First post', body:'First body text'}}/>
            <PostItem post={{id:2, title:'Second post', body:'dfgdfgdfg'}}/>

        </div>
    );
}

export default App;