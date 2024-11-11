//이름 출력
function sayHello(nameOfPerson){
    console.log(nameOfPerson);
}

sayHello("tama");
sayHello("dal");
sayHello("lynn");

//이름, 나이 함께 출력
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("tama", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

//더하기 함수 구현
function plus(a, b){
    console.log(a + b);
}
//나누기 함수 구현
function divide(a, b){
    console.log(a/b);
}

//위치 순서 중요
plus(8, 60);
divide(98, 20);

//함수에 정보 보내기
const player = {
    name: "tama",
    sayHello: function(otherPersonsName){
    console.log("hello! " + otherPersonsName + " nice to meet you!");
    },
};

player.sayHello("tama");
player.sayHello("lynn");
