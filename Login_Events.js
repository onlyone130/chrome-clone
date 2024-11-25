const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    event.preventDefault();
    //const username = loginInput.value;
    console.log(event);
}

loginForm.addEventListener("submit",onLoginSubmit);


//--------------------------------------------------------------------

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    //const username = loginInput.value;
    console.log(loginInput.value);
}

function handleLinkClick(){
    alert("clicked!!!");
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click", handleLinkClick);


//------------------------------------------------------------------------

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    //const username = loginInput.value;
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}

//eventListener 안에 있는 함수는 직접 실행하지 않음.
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click", handleLinkClick);
