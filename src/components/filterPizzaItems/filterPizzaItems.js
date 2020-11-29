import React, {useState, memo} from 'react'



const FilterPizzaItems = memo(function FilterPizzaItems({activeFilterCategorie, onClickItem, activeSortType, onSelectSortType}) {
    const [activePopup, setActivePopup] = useState(false);
    const categories = ['Мясные', 'Вегетереанские', 'Гриль', 'Острые', 'Закрытые'];
    const sortIems = [
        { name: 'популярности', type: 'rating', order: 'desc' },
        { name: 'цене', type: 'price', order: 'desc' },
        { name: 'алфавит', type: 'name', order: 'asc' },
    ];
    
    return (
    <div className="content__top filter-pizza-items container">
        <div className="categories">
            <ul>
                <li
                    onClick={() => {
                        onClickItem(null);
                    }} 
                    className={activeFilterCategorie === null ? "active" : null} 
                    key={null}>
                    Все
                </li>
                {categories.map((categorie, index) => (
                    <li 
                        onClick={() => {
                            onClickItem(index);
                        }} 
                        className={activeFilterCategorie === index ? "active" : null} 
                        key={index}>
                        {categorie}

                    </li>
                ))}
            </ul>
        </div>
        <div className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={activePopup ? "sort__popup-svg active" : "sort__popup-svg"}>
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"/>
                </svg>
                <b>Сортировка по:</b>
                <span
                    onClick={() => setActivePopup(!activePopup)}>
                    {sortIems.find(item => item.type === activeSortType).name}
                </span>
            </div>
            <div className={activePopup ? "sort__popup active" : "sort__popup"}>
            <ul>
                {sortIems.map(item => (
                    <li 
                        onClick={() => onSelectSortType(item)}
                        key={item.type} 
                        className={item.type === activeSortType ? "active" : null}>
                        {item.name}
                    </li>
                ))}
            </ul>
            </div>
        </div>
    </div>
  );
})

export default FilterPizzaItems;
