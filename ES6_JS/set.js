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
console.log("ar3 사이즈 =" + ar3.size); //3


// 삭제
ar3.delete('C');
console.log(ar3);     //A,B

// 한꺼번에 모두 삭제 : clear()
ar3.clear();
console.log(ar3);



// 생성 시 값을 추가하는 방법 
let ar = new Set().add('X').add('Y');
console.log(ar);      //X,Y

// 추가
ar.add('A');
ar.add('B');
ar.add('C');
ar.add('C');    //변동되지 않는다.

console.log(ar);
console.log("ar 사이즈 =" + ar.size);



// 출력 
// Spread 연산자 사용 (이터러블 객체(Iterable Object)의 요소를 하나씩 분리하여 전개) / 펼침 연산자
let testArr = ['k','o','r','e','a']; //let testArr = 'korea';로도 가능
console.log(...testArr);    //k,o,r,e,a (따로 반복문을 쓰지 않아도 하나씩 출력 가능)
console.log([...testArr]);  //배열의 형태로 뿌려주는 것

console.log([...'hello']);  //문자열 바로 넣어주는 것도 가능

console.log(...ar);         //X,Y,A,B,C   
console.log([...ar]);       //배열 형태로 X,Y,A,B,C


