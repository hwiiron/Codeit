import Button from './Button';
import Dice from './Dice';

function App() {
  return (
  <div>
    <div>
      {/* <Button text='던지기' />
      <Button text='처음부터' /> */}

      <Button>던지기</Button>
      <Button>처음부터</Button>
    </div>

    <Dice color="blue" num={2} />
    <Dice color="red" num={3} />
    {/* prop에 숫자를 추가할 때 자바스크립트의 숫자 2를 표현하려면 중괄호로 감싸야 사용 가능하다.  */}
  </div>
);
}

export default App;

// react에서는 컴포넌트에 지정한 속성을 props라고 한다.
// props는 properties의 줄임말이다.
// 각각의 속성은 prop이라고 부른다.