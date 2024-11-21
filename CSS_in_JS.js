const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    //변수 안에 string 저장
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        //만약 clickedClass가 h1의 classList에 포함되어있지 않다면,
        //아래와 같이 입력
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);
