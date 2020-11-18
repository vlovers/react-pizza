import React from 'react'

import Header from '../header'
import PizzaItem from '../pizzaItem'
import FilterPizzaItems from '../filterPizzaItems';


function Home() {
  return (
    <div className="wrapper">
        <Header/>
        <FilterPizzaItems/>
        <PizzaItem/>
    </div>
  );
}

export default Home;
