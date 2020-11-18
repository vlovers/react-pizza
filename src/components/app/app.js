import React from 'react'
import '../../scss/app.scss';
import CartEmpty from '../pages/cartEmpty';
import Home from '../pages/home'
import Empty from '../pages/empty';



function App() {
  return (
    <div className="app">
      <Home/>
      <CartEmpty/>
      <Empty/>
    </div>
  );
}

export default App;
