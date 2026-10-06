import './App.css'
import heroImg from './assets/hero.png'
import Example01 from './components/Example01.jsx'
import Example02 from './components/Example02.jsx'
import Example03 from './components/Example03.jsx'

function MyButton() {
  return (
    <button>목록보기</button>
  )
}

function App() {
  const season = '가을';

  return (
    <div className="app">
      <h2>리액트 시작하기</h2>
      <h3 className="welcome">홈페이지 방문을 환영합니다.</h3>
      <section>
        {/* <p>현재 계절은 {season}입니다.</p>
        <img src={heroImg} alt="메인이미지"
        width={200} />
        <MyButton /> */}
        {/* <Example01 /> */}
        {/* <Example02 />  */}
        <Example03/>
      </section>
    </div>
  )
}

export default App
