export const title = 'Codeitprinter';

export function print(value) {
  console.log(value);
}

// export를 한 번에 정리할 수 있다.
// export { title as printerTitle, print };

// 모듈 파일에서 미리 이름을 바꿔서 export 할 수 있다.


export default { title, print };
// { title: title, print: print }