import React from 'react';
import './App.css';
import {InputForm} from "./InputForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <div color="green">
                <InputForm defaultValue={'Yes because its big'}/>
                </div>

                <InputForm defaultValue={'hello form'}/>

            </header>
        </div>
    );
}

export default App;
