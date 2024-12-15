const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(username);
}

loginForm.addEventListener("submit",onLoginSubmit);

/*
style.css 파일에 아래와 같은 코드 추가

.hidden {
    display: none;
}

*/

/*
index.html 파일의 구성은 아래와 같다.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Momentum App</title>
</head>
<body>
    <form id="login-form">
    <input
    required
    maxlength="15" 
    type="text" 
    placeholder="What is your name?"/>
    <input type="submit" value="Log In">
    </form>
    <h1 class="hidden"></h1>
    <a href="https://hongik.ac.kr">Go to School</a>
    <script src="app.js"></script>
</body>
</html>

*/
