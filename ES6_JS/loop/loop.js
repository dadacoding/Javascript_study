// ES6 set() 자료구조 - 반복

let ar = ['a','b','c','d','e'];

console.log('--------------- 1 ---------------');
// 1. 전통적인 for 반복문
for(let i = 0; i < ar.length; i++){
    console.log(ar[i]);
}
console.log('------------- 1 end -------------');


console.log('--------------- 2 ---------------');
// 2. forEach() 메서드를 사용한 반복
ar.forEach(function(x){
    console.log(x);
});
console.log('===동일===');
ar.forEach(val => console.log(val)); //L13-15 더 간단하게 표현 가능
console.log('------------- 2 end -------------');


console.log('--------------- 3 ---------------');
// 3. Set의 다양한 메서드 --> Keys(),values()
let testSet3 = new Set(["tiger","lion","dog","cat"]);
testSet3.add("hippo");

console.log(testSet3);    // tiger,lion,dog,cat,hippo ("{}"로 표현됨. 이건 set객체라 index로 접근 불가)
console.log(testSet3[0]); // tiger가 아니라 undefined가 출력됨 (배열은 해당 요소가 출력 가능함)

let arr = [...testSet3];  
console.log(arr);         // tiger,lion,dog,cat,hippo ("[]"로 표현됨. 이건 배열이라 index로 접근 가능)
console.log(arr[0]);      // tiger
console.log(arr[4]);      // hippo

console.log('===================');

for (let i of testSet3){  // let i in testSet3 처럼 in을 쓰면 출력 불가
    console.log(i);       // tiger,lion,dog,cat,hippo
}
console.log('------------- 3 end -------------');


console.log('--------------- 3-1 ---------------');
// 3-1. keys()메서드 --> Iterator(반복자) 객체를 반환 --> next()메서드
const key_itr = testSet3.keys();
console.log(key_itr.next().value);  //tiger
console.log(key_itr.next().value);  //lion
console.log(key_itr.next().value);  //dog
console.log(key_itr.next().value);  //cat
console.log(key_itr.next().value);  //hippo

console.log('===================');

// 3-2. values()메서드 --> Iterator(반복자) 객체를 반환 --> next() 메서드
const val_itr = testSet3.values();
console.log(val_itr.next().value);   //tiger
console.log(val_itr.next().value);   //lion
console.log(val_itr.next().value);   //dog
console.log(val_itr.next().value);   //cat
console.log(val_itr.next().value);   //hippo

console.log('------------- 3-1 end -------------');


console.log('--------------- 4 ---------------');
// 4. for .. of 반복문으로 출력
for(let i of testSet3){  //for(let i in testSet3)는 출력 X
    console.log(i);   
}
console.log('------------- 4 end -------------');


console.log('--------------- 5 ---------------');
// 5. entries()메서드
let testSet5 = new Set();

testSet5.add('홍길동');    // 홍길동, 홍길동
testSet5.add('남길동');    // 남길동, 남길동
testSet5.add('서길동');    // 서길동, 서길동

const entries = testSet5.entries();

for(let i of entries){
    console.log(i);
}
//삽입 순으로 Set 요소 각각에 대해서 [value,value] 배열 형식으로 새로운 객체를 반환
//"[]"로 표현됨. 배열 객체로 쌍으로 만들어 줌
console.log('------------- 5 end -------------');