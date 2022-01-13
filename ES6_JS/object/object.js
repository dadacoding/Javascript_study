// 자바스크립트 객체 - 프로토타입 (Prototype)

// 1. 프로토타입이란 무엇인가?
// 자바스크립트를 공부하는 과정에서 흔히 들어보게 되는 용어 중 하나 --> 다른 언어 공부할 때는 별로 들어보지 X
// 자바스크립트는 프로토타입 기반 언어이다. --> 이를 기반으로 확장과 재사용성을 ↑
// 사전적의미 --> Prototype:원형 --> 이러한 사전적 의미와 같은 개념으로 자바스크립트에서도 사용
// 쉽게 말해, 객체의 프로토타입(원형)을 가지고 새로운 객체를 생성해가는 프로그래밍 방식
// 즉, 생성된 객체는 자기자신의 프로토타입을 갖는다. --> 즉, 자기자신이 만들어지게된 원형을 안다.
// 다소 생소 --> 조금 어렵다 ㅠ.ㅠ


// 2. Prototype vs Class
// 지금은 자바스크립트도 Class를 문법적으로 지원하기 시작했지만 원래 자바스크립트는 프로토타입 기반의 언어이다.
// 즉, 기존에는 Class라는게 없었다.
// 그래서, 객체의 원형인 프로토타입을 이용하여 객체의 확장과 재사용, 상속 등을 구현해나갔다.
// Prototype객체는 new연산자에 의해서 생성된 객체 --> 공유 프로퍼티, 메서드 등을 제공하기 위해서 사용된다.


// 3. 예
const fruit = {name:'apple'};
console.log(fruit.name);   //apple

// 속성 추가
fruit.expiration = '20241230';
console.log(fruit.expiration);  //20241230

// 속성이 있는지 없는지 체크 --> hasOwnProperty()메서드 사용
console.log(fruit.hasOwnProperty('expiration'));  //true
console.log(fruit.hasOwnProperty('country'));     //false

// hasOwnProperty()메서드는 fruit객체가 어떻게 쓰는거지? --> 이럴땐 콘솔로 찍어보면 된다.
console.log(fruit);

const aaa = {};
console.log(aaa); //__proto__ (비어있어도 다 가지고 있다.)

// hasOwnProperty() --> fruit()객체에서 정의해버리면?
const fruit2 = {

    name : 'apple',
    expiration: '20241231',
    hasOwnProperty:function(){
        console.log('안녕');
    }

};

fruit2.hasOwnProperty();   //안녕


console.log('==================================');


// 자바스크립트 함수의 내부와 객체간의 관계

// 1. 함수가 만들어지고 수행이 되어지면
// 내부에서는...
//   1) 함수 자신과 예를 들면 'Animal함수' 자신과 그리고 자신과 같은 이름의 'Animal프로토타입 객체'가 생성
//   2) Animal 함수 멤버로 --> prototype 속성이 생성 --> 다른 곳에 생성된 같은 함수 이름의 'Animal프로토타입 객체'를 가리킴(참조)

function Animal(){}

// Animal함수                                      Animal프로토타입 객체
// + prototype --> Animal프로토타입 객체(참조)     + constructor --> Animal함수(참조)
// + run() X -메모리낭비임                         + run()

// 이런 상황일 때 --> 'Animal프로토타입 객체' --> 생성자 함수와 new 연산자를 통해서 만들어내는 모든 객체의 원형이 되는 객체

let tiger = new Animal(); 
let lion = new Animal();
// 이렇게 new연산자와 생성자 함수를 이용하여 객체 생성 시 각 객체에는 --> __proto___속성이 자동으로 생성
// 이 속성(__proto__)은 뭔가를 가리키는데 --> 이 객체가 만들어질 수 있도록 해준 원형 --> '프로토타입 객체 (여기선 Animal프로토타입 객체)'를 숨은 링크로 가리킨다(참조한다)

console.log(tiger);
console.log(lion);