import axios from 'axios'

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))


    
    axios.get(category === null ? `http://localhost:3001/pizzas?_sort=${sortBy.type}&_order=${sortBy.order}` : `http://localhost:3001/pizzas?category=${category}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({ data }) => {
        dispatch(setPizzas(data))
        dispatch(setLoaded(true))
    });
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});