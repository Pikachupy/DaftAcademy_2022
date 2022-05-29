import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import {InputForm} from "./InputForm";
import {PolicyPage} from "./policy";

export const routesPaths = {
    home: '/',
    about: 'about',
    form: 'form',
    policy: 'policy'

}

function App() {
    return (
        <div className="App">
            <div className='App-header'>
                <div>
                    logo
                </div>
                <div>
                    <Link className='App-link' to={'/'}>Home</Link>
                    <Link className='App-link' to={`/${routesPaths.about}`}>About</Link>
                    <Link className='App-link' to={'/form'}>Form</Link>
                    <Link className='App-link' to={'/policy'}>Policy</Link>
                </div>
            </div>
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
