### `Interface` 사용 방법

`interface`는 객체 구조를 정의하기 위해 사용합니다. 객체의 프로퍼티와 타입을 지정하며, 선택적 프로퍼니틑 `?`를 붙여서 표시할 수 있습니다.

```jsx
interface Product {
  id: string;
  name: string;
  price: number;
  memebersOnly: boolean; // 선택적 프로퍼티
}
```

---

### enum 예시와 함께 사용하기

```jsx
enum Size {
	S = 'S';
	M = 'M';
	L = 'L';
	XL = 'XL';
}
```

---

### 상속을 통한 확장

`interface`는 상속을 통해 기존의 인터페이스를 확장할 수 있습니다. 새로운 인터페이스에서 기존 인터페이스의 모든 속성을 가져오면서 추가적인 속성을 정의할 수 있습니다.

```jsx
interface ClothingProduct extends Product {
  sizes: Size[];
}
```

---

### 예시 객체 생성

```jsx
const product1: ClothingProduct = {
  id: "c001",
  name: "반팔티",
  price: 1000,
  membersOnly: true,
  sizes: [Size.M, Size.L],
};

const product2: ClothingProduct = {
  id: "d001",
  name: "긴팔티",
  price: 1500,
};
```
