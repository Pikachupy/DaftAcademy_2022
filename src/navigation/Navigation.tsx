import {Link} from "react-router-dom";
import React from "react";
import {routesPaths} from "../routes";
import './styles.css';
import { useState } from 'react';
// import MenuIcon from '@material-ui/icons/Menu'; -- npm install @material-ui/icons  --  installation error  -- to find why

export const Navigation = () => {
    const [navigationVisible, setNavigationVisible ] = useState<boolean>( true)
    const handleShowMobile = () => {
        setNavigationVisible(!navigationVisible)
    }
    return(
    <div className='Navigation'>
        <div>
            WELCOME
            <span onClick={handleShowMobile} className='Navigation-mobile'>≡</span>
        </div>
        {navigationVisible && <div className='Navigation-links'>
            <Link className='App-link' to={'/'}>Home</Link>
            <Link className='App-link' to={`/${routesPaths.about}`}>About</Link>
            <Link className='App-link' to={'/form'}>Form</Link>
            <Link className='App-link' to={'/contact'}>Contact</Link>
        </div>}
    </div>
    )
}