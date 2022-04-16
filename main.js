// 1. 변수(Variable) : 처리할 데이터를 담음, 변수를 통해 데이터에 접근, 데이터 업데이트

// primitive data type : 담을 수 있는 가장 작은 단위의 데이터타입
//  number, string, boolean, null, undefined

let number = 2; // number 라는 공간안에 숫자 2라는 데이터가 들어가게됨
let number2 = number; // 💊 number 에 할당된 데이터 자체를 그대로 복사해 옴
console.log(number); //2
console.log(number2); //2

number2 = 3; // 2 -> 3 으로 업데이트됨
console.log(number); //2
console.log(number2); //3

let num = '2';

// 2. 객체(Object) : 최소한 한 두가지 이상의 데이터를 한군데 묶어 놓은 것
// primitive data type을 제외한 모든 것, 배열, 리스트, 함수
// key , value 로 구성됨
// 각각의 key 마다 메모리가 할당됨
// but! Object는 크기가 너무커서 특정 reference 만 변수에 할당된다.

let obj = {
  name: 'hiko',
  age: 5,
};

console.log(obj.name);

let obj2 = obj; // 💊 obj의 reference (주소)가 복사되어 가져와짐 (데이터 자체 복사 X)

obj.name = 'james';
console.log('-----');
console.log(obj.name); //james
console.log(obj2.name); //james

obj2.name = 'sally';
console.log('-----');
console.log(obj.name); //sally
console.log(obj2.name); //sally

// 3. 상수 변수(Constants variable)

const obj3 = {
  name: 'hiko',
  age: 30,
};

// 재할당 불가한 것은 오브젝트 내의 데이터가 아닌 "reference" 이기 때문에
// 오브젝트 그 자체를 변경할 수 없다.
// obj3 = {
//   name: 'hikonya',
//   age: 10,
// };
//main.js:49 Uncaught TypeError: Assignment to constant variable.

// 오브젝트 내의 데이터를 재할당하는 것은 가능함
obj3.name = 'hikonya';
console.log(obj3);
//{name: 'hikonya', age: 30}

// 🏠 집주소를 변경할 수 없지만 집 안에 있는 물건을 바꿀 수 있다 !
