### Node.js 프로젝트 생성

```jsx
npm init
```

프로젝트 초기화를 위해 위 명령어를 실행합니다. 필요한 정보를 입력한 후 `package.json` 파일이 생성됩니다.

---

### TypeScript 설치

```jsx
npm install --save-dev typescript
```

정상적으로 설치가 되었다면 `package.json` 파일의 `devDependencies` 섹션에 typescript가 추가됩니다.

---

### TypeScript 설정 파일 생성

```jsx
npx tsc --init
```

명령어를 통해 `tsconfig.json` 파일이 생성됩니다. 이 파일은 `TypeScript` 컴파일러의 설정을 관리합니다.

---

### TypeScript 코드를 JavaScript로 변환

`package.json` 파일에 `build` 명령어를 추가합니다.

```jsx
"scripts": {
  "build": "tsc"
},
```

아래 명령어를 실행하여 TypeScript 코들르 JavaScript 코드로 변환할 수 있습니다.

```jsx
npm build
```

---

### JavaScript 파일을 Node.js로 실행

```jsx
node main.js
```

`Node.js`로 `JavaScript` 파일을 실행합니다. 자주 사용되기 때문에 `package.json` 파일에 `start` 스크립트를 추가할 수도 있습니다.

```jsx
"scripts": {
  "build": "tsc",
  "start": "node main.js"
},
```

아래 명령어로 실행할 수 있습니다.

```jsx
npm start
```
