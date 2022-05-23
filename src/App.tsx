import React from 'react';
import './App.css';
import {InputForm} from "./InputForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{color: "aqua"}}>
                <InputForm defaultValue={'hello form'}/>
                </div>
            </header>
        </div>
    );
}

export default App;
