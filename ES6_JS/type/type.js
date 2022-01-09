// ES6 심볼(Symbol) 타입

// 1. 심볼(Symbol) 타입이란 무엇인가?
// 타입이란 말에서 알 수 있듯이 ES6에서 새롭게 도입된 원시형 타입 중 하나 --> 객체의 속성으로 사용
// 심볼의 사전적 의미 --> 상징 --> 심볼형을 사용하면 --> 유일무이한 값, 고유한 값을 가진다.
// 동시에 심볼형 값은 --> 변경 불가능한 불변값.


// 2. 기존 타입들 --> 원시형과 참조형 --> 이 중 원시형에 새롭게 추가된 타입
//    1) 원시형 - Number, String, Null, Undefined, Boolean, + Symbol(ES6)
//    2) 참조형 - Object(object, function, array...)


// 3. 왜 객체의 속성으로 심볼을 사용하는가? --> 충돌을 피하기 위함
// 예를 들어, 배열 객체를 만들어서 "배열명.length"하면 --> 배열의 길이 --> 같은 이름의 length로 덮어쓰면 덮어써지는 문제가 발생.
// 이 때, 배열의 길이 값은 그대로 유지하면서 같은 이름의 length 속성을 추가하고자 할 때 --> 심볼을 사용하면 --> 문제 해결
// 예 ↓
let ar = [1,2,3,4,5];
alert(ar.length); // 5 --> 배열의 길이 --> 즉, 요소 수를 알 수 있는 내장된 속성 --> length 속성 덕분에

ar.length = 50;   // ar배열에 length 속성을 정의하고 50을 할당
alert(ar.length); // 50 --> 이렇게 덮어써버림.

// 심볼을 사용하면
let ar2 = [1,2,3,4,5];
const length = Symbol('length');
ar2[length] = 50;    // ar2배열의 length 속성에 50을 할당
alert("ar2.length =" + ar2.length);   // 5
alert("ar2[length] =" + ar2[length]);  // 50

// 정리
// 객체에 속성을 추가하거나 덮어써질 우려가 있다면 --> 충돌을 피하기 위한 수단으로 --> 심볼(Symbol)을 사용할 수 있다.


// 4. 심볼 사용법(생성법)
//    1) 심볼은 new 연산자를 사용하지 않는다. --> Symbol() 함수를 사용하여 생성.
let symbol = Symbol();

//    2) 괄호 안은 비워두고 생성해도 되고, 문자열을 넣어서 생성해도 된다.
//       보통 이때의 문자열은 --> 단순 디버깅 용도이거나 단순 설명일 뿐, 고유한 값을 가지는 데 있어서 어떤 영향을 끼치거나 하지는 않는다.
//       따라서, description 인자는 심볼의 고유값을 구분하지 못한다. 
//       (이유는 심볼은 매번 심볼함수 호출 시 새로운 심볼 값을 생성해내기 때문)

let symbol2 = Symbol('personName');
let symbol3 = Symbol('personName');

alert(symbol2 === symbol3);  //false (서로 다르다! / ''안의 값은 영향을 미치지 않는다.)
alert(symbol2 == symbol3);   //false


// 5. 심볼의 출력 형태
// 이때, 심볼 값은 문자열 형태로 변환할 수 없기 때문에 출력은 --> console.log로 콘솔에 출력
let symbol5 = Symbol('age');
//alert(symbol5);   // 이렇게 하면 alert에 안나오고 콘솔창에서 보면 오류라고 뜬다.
console.log(symbol5);  // Symbol(age)  <-- 이와 같은 형태로 출력


// 6. 심볼형은 for...in 구문으로 반복 시 출력되지 않는다. (은닉성도 가지고 있다)
// 배열 객체에 속성을 추가하면 --> for...in 반복문으로 출력 시 해당 속성도 같이 출력 된다.
let ar6 = [1,2,3,4,5];
ar6.someProperty = 10;

for(let i in ar6){
    console.log(i);  // 0,1,2,3,4,someProperty
}

console.log('-----------------심볼형을 사용하면-----------------');
let ar6_ = [1,2,3,4,5];
let someProperty = Symbol('someProperty');

ar6_[someProperty] = 10;

for(let i in ar6_){
    console.log(i);  // 0,1,2,3,4 --> someProperty 속성이 나타나보이지 않고 인덱스만 출력됨.
}
console.log(ar6_[someProperty]);  //10


// 정리
// 배열 객체에 어떤 속성을 넣고자 한다면, 그리고 동시에 반복문에서 속성이 나타나지 않게 하고자 한다면 --> 즉, 속성을 은닉화 하고자 한다면
// 심볼을 사용할 수 있다.