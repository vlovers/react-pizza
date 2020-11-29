import React, {useCallback, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {setCategory, setSortBy} from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas'
import {addPizzaToCart} from '../redux/actions/cart'
import Header from '../components/header'
import PizzaItem from '../components/pizzaItem'
import FilterPizzaItems from '../components/filterPizzaItems';
import LoadingPizzaBlock from '../components/loadingPizzaBlock'


function Home() {
    const dispatch = useDispatch();

    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const cartItems = useSelector(({ cart }) => cart.items);
    const {category, sortBy} = useSelector(({filters}) => filters);
    
    useEffect (() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const onAddedToCart = useCallback((item, type, size) => {
        dispatch(addPizzaToCart(item, type, size))
        
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <FilterPizzaItems onSelectSortType={onSelectSortType} activeFilterCategorie={category} onClickItem={onSelectCategory} activeSortType={sortBy.type}/>
            
            <div className="content__bottom container">
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoaded 
                            ? items.map(pizza => (
                                <PizzaItem 
                                    onAddedToCart={onAddedToCart} 
                                    key={pizza.id} 
                                    pizza={pizza} 
                                    addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length}/>
                                ))
                            : Array(10).fill(0).map((_, index) => <LoadingPizzaBlock key={index} />)}                    
                </div>

                
            </div>
        </div>
  );
}

export default Home;
