// import { title as printTitle, print } from './printer.js';
// import { title, data as members } from './members.js';

// 와일드 카드 import는 불필요한 요소까지 가져와서 필요할 때만 사용 권장
import * as printerJS from './printer.js'

import {
  default as codeit,
  // default import 시에는 꼭 as를 시켜줘야 사용 가능하다.
  title as membersTitle,
  data as members
} from './members.js';

// default as를 생략하고 default 값에 붙여줬던 이름을 중괄호 밖으로 뺼 수 있다.
import codeit, {
  // default import 시에는 꼭 as를 시켜줘야 사용 가능하다.
  title as membersTitle,
  data as members
} from './members.js';

// const title = 'Codeit';

// 모듈 문법
print(printerJS.printTitle);
print(members);