const counter = () => {
    const [count, setCount] = useState(0);
    
    const increase = () => {
        setCount(count + 1);
    }

    const descrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>카운터</h2>
            <h3>현재 Count: {count}</h3>
            <button onClick={increase}>+증가</button>
            <button onClick={descrease}>-감소</button>
        </div>
    )



}

export default counter;