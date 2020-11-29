import React from 'react'
import '../../scss/app.scss';
import {Route} from "react-router-dom";



import CartEmpty from '../../pages/cartEmpty';
import Home from '../../pages/home'
import Cart from '../../pages/cart';



function App() {

    return (
        <div className="app">
            <Route exact component={Home} path={`/`}/>
            <Route component={CartEmpty} path={`/cartEmpty`}/>
            <Route component={Cart} path={`/cart`}/>
        </div>
  );
}

export default App;
