import { useState } from 'react';
import Board from './Board';
import Button from './Buttons';
import logoImg from './assets/logo.png'
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);

    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  }

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  }

  return (
    <div className='App'>
      <div>
        <img className="App-logo" src={logoImg} alt="주사위게임 로고" />
        <h1 className="App-title">주사위게임</h1>

        <div>
          <Button className='App-Button' color='blue' onClick={handleRollClick}>던지기</Button>
          <Button className='App-Button' color='red' onClick={handleClearClick}>처음부터</Button>
        </div>
      </div>
        
      <div className='App-boards'>
        <Board name='나' color='blue' gameHistory={myHistory} />
        <Board name='상대' color='red' gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;

// react에서는 컴포넌트에 지정한 속성을 props라고 한다.
// props는 properties의 줄임말이다.
// 각각의 속성은 prop이라고 부른다.