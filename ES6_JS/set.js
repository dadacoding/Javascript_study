let ar2 = [1,2,3,4,5,5];
console.log(ar2);     //1,2,3,4,5,5
console.log(ar2[4]);  //5
console.log(ar2[5]);  //5


// 생성
let ar3 = new Set();  //비어있는 set 하나 생성
console.log(ar3);     //object set 객체를 반환
//alert(ar3);           //object set 객체를 반환


// 추가
ar3.add('A');
ar3.add('B');
ar3.add('C');
ar3.add('C');         //아무리 중복값을 넣어도 size는 3에서 변동없음
ar3.add('C');
ar3.add('A');
console.log(ar3);     //A,B,C
console.log(ar3[0]);  //A가 아닌 undefined가 나옴


// 사이즈
console.log("ar3 사이즈는 =" + ar3.size); //3


// 삭제
ar3.delete('C');
console.log(ar3);     //A,B

// 한꺼번에 모두 삭제 : clear()
ar3.clear();
console.log(ar3);
