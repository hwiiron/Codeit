###### Weekly Paper 1주차 - 2024.08.31 토요일

### 📚 CSS의 Cascading에 대해 설명해 주세요.

![cascade](https://img.freepik.com/free-photo/environment-landscape-stone-cascade-saigon-beautiful_1417-1359.jpg)

CSS는 Cascading Style Sheet의 약자로, 'Cascading'은 '폭포'처럼 규칙이 위에서 아래로 흐르며 합쳐지는 것을 의미합니다.

우선순위에서는 인라인 스타일이 가장 높은 우선순위를 가지며, 코드 내에서는 나중에 작성된 규칙이 먼저 적용됩니다.  
또한, 선택자의 특이성에 따라 규칙의 우선순위가 결정됩니다.

일부 스타일은 부모 요소에서 자식 요소로 상속되기도 하며, 이 상속된 값도 Cascading에 영향을 미칩니다.  
예를 들어, 부모 요소의 color 속성은 자식 요소에 상속되지만, margin 속성은 상속되지 않습니다.

마지막으로 특정 스타일에 !important를 사용하면 특이성, 순서와 관계없이 가장 높은 우선순위로 적용됩니다.<br>
그러나 !important는 코드 유지보수를 어렵게 할 수 있으므로, 필요할 때만 사용하는 것이 좋습니다.

<br>

> 기본적으로는 h1 태그의 글자 색상이 #000으로 적용됩니다.<br>
> 하지만 div 태그에 !important를 사용하면, h1 태그의 글자 색상이 #fff으로 적용됩니다.

```css
// !important 사용 예시

div {
  color: #fff;
}

div h1 {
  color: #000;
}



// !important 사용
div {
  color: #fff !important;
}

div h1 {
  color: #000;
}

```
