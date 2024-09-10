/** 
 * [마우스 이동 이벤트]
 * 
 * > MouseEvent.type
 * mousemove: 마우스 포인터가 이동할 때
 * mouseover: 마우스 포인터가 요소 밖에서 안으로 이동할 때
 * mouseout: 마우스 포인터가 요소 안에서 밖으로 이동할 때 
 *
 * > MouseEvent.clientX, clientY
 * : 화면에 표시되는 창 기준 마우스 포인터 위치   
 * 
 * > MouseEvent.pageX, pageY
 * : 웹 문서 전체 기준 마우스 포인터 위치
 * 
 * > MouseEvent.offsetX, offsetY
 * : 이벤트가 발생한 요소 기준 마우스 포인터 위치
 */

const box1 = document.querySelector('#box1');

function onMouseMove(e) {
  console.log(`client: (${e.clientX}, ${e.clientY})`);
  console.log(`page: (${e.pageX}, ${e.pageY})`);
  console.log(`offset: (${e.offsetX}, ${e.offsetY})`);
  console.log('------------------------------------');
}

box1.addEventListener('mousemove', onMouseMove);