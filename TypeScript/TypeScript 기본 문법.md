### 기본형

| 종류      | 타입      |
| --------- | --------- |
| 문자열    | string    |
| 숫자형    | number    |
| 불린형    | boolean   |
| undefined | undefined |
| null      | null      |

---

### 배열과 튜플

배열 타입은 타입 뒤에 `[]` 를 붙여서 정의할 수 있습니다. 만약 이차원 배열을 만들고 싶다면, 배열 타입뒤에 다시 []를 붙이면 됩니다.

튜플은 길이와 순서가 정해진 배열로, 대괄호 `[]` 안에 각 요소의 타입을 쉼표로 구분하여 명시합니다.

```jsx
// 배열
const arr: string[] = [];
arr.push("");
arr.push("");

// 배열의 배열(이차원 배열)
const carts: string[][] = [["", ""], [""]];

// 튜플
let newArr: [number, string] = [27, "신휘철"];
```

---

### 객체 타입

중괄호 `{}` 안에 프로퍼티 이름을 작성하고, 콜론 `:` 다음에 해당 프로퍼티의 타입을 지정합니다. 각 프로퍼티는 세미콜론으로 구분됩니다. 선택적인 프로퍼티는 이름 뒤에 물음표를 `?`를 붙여 표시할 수 있습니다.

```jsx
let product: {
  id: string,
  name: string,
  price: number,
  membersOnly?: boolean,
  sizes: string[],
} = {
  id: "",
  name: "",
  price: 1000,
  sizes: ["M", "L", "XL"],
};
```

프로퍼티의 개수를 미리 정하지 않고, 모든 프로퍼티 값의 타입을 지정하려면 아래 문법으로 사용할 수 있습니다.

```jsx
let rank: { [name: string]: number } = {
  은주: 1,
  꿈: 2,
  달: 3,
  휘철: 4,
};
```

---

### `any` 타입

`any` 타입은 `JavaScript`에서의 동적 타입과 비슷하게 모든 값을 허용하는 타입입니다. 자유롭게 값을 다룰 수 있지만, 타입 안정성을 해칠 수 있으므로, 가능한 사용을 피하는 것이 좋습니다. `any` 타입을 사용할 때는 `as` 키워드나 명시적인 타입 지정으로 변환하는 것이 좋습니다.

```jsx
// any 타입 사용 예시
let someValue: any = "Hello, world!";
someValue = 42; // 다른 타입도 허용됨
someValue = true; // 역시 다른 타입 허용

// as 키워드로 타입 변환
let inputValue: any = "42";
let numericValue = inputValue as number;

// JSON.parse와 any 타입 처리
const jsonData: any = '{"title": "타입스크립트 책", "price": 15000}';
const parsedData: { title: string; price: number } = JSON.parse(jsonData);
```

---

### 함수 타입

함수의 리턴 타입을 지정할 때는 다음과 같이 작성할 수 있습니다.

```jsx
function addToCart(id: string, quanity: number): boolean {
    if (어떤 조건) {
     return false;
  }

  return true;
}
```

리턴 타입을 명시하지 않고, `TypeScript`가 리턴 값을 기반으로 추론하게 할 수 있습니다.

```jsx
function addToCart(id: string, quanity: number) {
    if (어떤 조건) {
     return false;
  }

  return true;
}
```

함수를 값으로 사용하는 경우는 화살표 함수 형태로 작성할 수 있습니다.

```jsx
(id: string, quanity: number) => boolean;
```

Rest 파라미터는 배열 타입으로 지정할 수 있으며, 값을 리턴하지 않는 경우 리턴 타입을 `void`로 지정합니다.

```jsx
(...ids: string[]) => void;
```
