const Example01 = () => {
    const isloggedIn = true;

    let result = "";
    if (isloggedIn) {
        result = "로그인 상태입니다.";
    }else {
        result = "로그인 상태가 아닙니다.";
    }

  return (
    <div>
        <h2>조건부 렌더링</h2>
        <p>{result}</p>
        {isloggedIn ? <p>로그인 상태입니다.</p> : 
        <p>로그인 상태가 아닙니다.</p>}
        {isloggedIn && <p>로그인 상태입니다.</p>}
    </div>
  )
}

export default Example01;