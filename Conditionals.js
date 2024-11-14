//javascript 일시정지
const age = prompt("How old are you?");

//12를 입력해도 string이라고 나옴. 이건 default값.
//parseInt를 통해서 string을 number형태로 변경 가능.
console.log(typeof "15", typeof parseInt("15"));


//----------------------------------------------------------


const age = parseInt(prompt("How old are you?"));

//condidion은 boolean이다.
if(isNaN(age)){
    console.log("Please write a number!");
} else {
    console.log("Thank you for writing your age!");
}
