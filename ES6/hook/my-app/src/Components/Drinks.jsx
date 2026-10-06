import { useState } from 'react';
import DrinkList from './DrinksList';

const Drinks = () => {
    const [value, setValue] = useState("");

    const [drinks, setDrinks] = useState([]);

    const handleInputValue = (e) => {
        setValue(e.target.value);
    }

    const addDrink = () => {
        const newDrink = value;
        setDrinks([...drinks, newDrink])
        setValue(""); // 입력 후 입력창 비우기
    }
return(
    <div>
        <h2>음료 리스트</h2>
        <input
        type="text"
        placeholder='음료를 입력하세요.'
        value={value}
        onChange={handleInputValue}
        />
        {/* <p>입력된 음료: {value}</p> */}
        <button onClick={addDrink}>음료 추가</button>
        {/* <ul>
            {drinks.map((drink, index) => (
                <li key={index}>{drinks.join(", ")}</li>
            ))}
        </ul> */}
        <DrinkList 
            drinklist={drinks} />
    </div>
)

}

export default Drinks