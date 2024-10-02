import { useState, useEffect, useRef } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);
  // useEffect는 의존성 배열에 있는 값이 변경되어야만 실행이 되며, 컴포넌트가 처음 마운트될 때 한 번만 실행
  // 의존성 배열 []이 비어 있기 때문에 이후에는 다시 실행되지 않으며, 마운트 시에만 코드를 실행하고 싶을 때 사용

  // 2. 업데이트 : 변화, 리렌더링
  const isMount = useRef(false);
  useEffect(() => {
    // 마운트가 되었는지 확인
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  // 두 번째 인수인 의존성 배열을 생략하면, 이 콜백함수는 마운트될 때 한 번 실행된 후, 컴포넌트가 리랜더링 될 때마다 계속 실행된다.

  // 3. 언마운트 : 죽음

  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
