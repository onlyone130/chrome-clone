const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//const가 아닌 let으로 선언함으로써 덮어쓰는 것이 아닌, 데이터를 array에 추가하는 형태로 변경
let toDos = [];

function saveToDos(){
    /*toDos arry를 localStorage에 넣기
    이걸 호출하는 시점에서는 newToDo가 array에 들어있음   
    localStorage.setItem("todos", toDos);*/
    //javascript object나 어떤 것이든 string으로 바꾸어주는 기능 활용. [" "," ",...] 와 같은 array 형태로 저장됨.
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    //console.log(event.target.parentElement);
    const li = event.target.parentElement;
    //console.log(typeof li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    //console.log("i will paint", newTodo);
    //html에 들어갈 요소, 태그 생성. 변수명은 li혹은 span 일 필요는 없음
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    //console.log(newTodo, toDoInput.value);
    toDos.push(newTodoObj);
    //toDos 배열에 newTodoObj 추가
    paintToDo(newTodoObj);
    saveToDos(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*function sayHello(item){
    console.log("This is the turn of ",item);
}
*/

const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos);

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    //console.log(parsedToDos);
    // => 는 arrow function 이라고 부른다. 다른 코드보다 조금 더 짧게 코드를 작성할 수 있다.
    //parsedToDos.forEach((item) => console.log("This is the turn of ",item));
    //toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

//array에서 무언가를 삭제할 때, array 내부의 item을 삭제하는 것이 아니라, 실제로는 item을 삭제하고 새로운 array를 새로 만드는 것임.
function sexyFilter(){
    //반드시 리턴값은 true
    
}
