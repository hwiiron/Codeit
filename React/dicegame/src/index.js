import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment> {/* JSX 문법으로 html태그를 작성할 때는 반드시 하나로 감싸진 태그를 사용해야 합니다. */}
    <h1 id='hello'>안녕</h1>

    {/* JSX에서 class는 className으로 사용해야 합니다. */}
    <p className='react'>리액트!!</p>

    <form>
      {/* 자바스크립트 반복문에는 for 키워드를 사용하기 때문에 label에 for속성을 사용하려면 htmlFor라고 작성해줘야 합니다.  */}
      <label htmlFor='name'>이름</label>

      {/* 이벤트 핸들러의 이름도 html과 다르게 JSX 문법인 카멜 케이스로 작성해줘야 합니다.  */}
      <input id='name' type='text' onclick='' onBlur='' onFocus='' onMouseDown=''/>
    </form>
  </Fragment>
  // 프레그먼트는 <></>로 깔끔하게 사용할 수 있습니다.
);