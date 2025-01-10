const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    //입력 후 enter를 입력해도 칸이 초기화되지 않고, 페이지가 새로고침 되지도 않음
    event.preventDefault();
    //step1. input의 현재 value를 새로운 변수에 복사
    const newTodo = toDoInput.value;
    console.log(toDoInput.vlaue);
    toDoInput.value = "";
    console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
