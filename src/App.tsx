import React from 'react';
import './App.css';
import {InputForm} from "./InputForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div color="green">
                <InputForm defaultValue={'hello form'}/>
                </div>
            </header>
        </div>
    );
}

export default App;
