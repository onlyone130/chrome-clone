const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    //console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    //console.log("i will paint", newTodo);
    //html에 들어갈 요소, 태그 생성. 변수명은 li혹은 span 일 필요는 없음
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    //li는 span이라는 child를 가지게됨
    li.appendChild(span);
    li.appendChild(button);
    //console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    //입력 후 enter를 입력해도 칸이 초기화되지 않고, 페이지가 새로고침 되지도 않음
    event.preventDefault();
    //step1. input의 현재 value를 새로운 변수에 복사
    const newTodo = toDoInput.value;
    //console.log(toDoInput.vlaue);
    toDoInput.value = "";
    //console.log(newTodo, toDoInput.value);
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
