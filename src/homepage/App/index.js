import React from 'react'
import {Switch,Route,Link} from 'react-router-dom';
import {Layout,Tpography,Space} from 'antd';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">Navbar</div>
            <div className="main">Main</div>
            <div className="footer">Footer</div>
        </div>
    )
}

export default App
