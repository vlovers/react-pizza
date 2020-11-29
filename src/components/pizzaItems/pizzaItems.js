import React from 'react';
import {useSelector} from 'react-redux';
import PizzaItem from '../pizzaItem';



function PizzaItems({filterPizzaActive}) {

    const items = useSelector(({pizzas}) => pizzas.items);


       
    
    return (
    <div className="content__bottom container">
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {
                items.filter(pizza => filterPizzaActive === 0 ? pizza : pizza.category === filterPizzaActive && filterPizzaActive).map(pizza => (
                    <PizzaItem key={pizza.id} pizza={pizza}/>
                ))
            }
            
        </div>

        
    </div>
  );
}

export default PizzaItems;
