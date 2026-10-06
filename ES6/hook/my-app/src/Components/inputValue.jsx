import { useState } from 'react';

const InputValue = () => {
    const [value, setText] = useState("");

    const handleInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <h2>Input Value</h2>
            <input type="text" value={value} onChange={handleInputChange} />
        </div>
        
    )
}

export default InputValue;