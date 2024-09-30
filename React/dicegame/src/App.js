import { useState } from 'react';
import Board from './Board';
import Button from './Buttons';

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
    <>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      
      <div>
        <Board name='나' color='blue' gameHistory={myHistory} />
        <Board name='상대' color='red' gameHistory={otherHistory} />
      </div>
    </>
  );
}

export default App;

// react에서는 컴포넌트에 지정한 속성을 props라고 한다.
// props는 properties의 줄임말이다.
// 각각의 속성은 prop이라고 부른다.