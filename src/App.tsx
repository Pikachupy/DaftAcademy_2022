import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import {InputForm} from "./InputForm";
import {PolicyPage} from "./policy";
import {routesPaths} from "./routes";
import {Navigation} from "./navigation";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path={`/${routesPaths.home}`} element={<InputForm defaultValue={'Hello there!'}/>}/>
                <Route path='*' element={<div>Error 404: you lost! </div>}/>
                <Route path={`/${routesPaths.about}`} element={<div>About</div>}/>
                <Route path={`/${routesPaths.policy}`} element={<PolicyPage/>}/>
                <Route path={`/${routesPaths.form}`} element={<div>Form</div>}/>
            </Routes>
        </div>
    );
}

export default App;
