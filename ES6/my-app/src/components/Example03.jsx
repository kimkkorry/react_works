const Example03 = () => {
    const handleClick = () => {
        alert('버튼이 클릭되었습니다.');
    }

return (
    <div>
        <h2>이벤트 핸들러 함수</h2>
        <button onClick={handleClick}>클릭하세요</button>
        <input
            type="text"
            onChange={handleInputChange}
        />
    </div>
);

}

export default Example03;