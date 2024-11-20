const h1 = document.querySelector("div.hello:first-child h1");

//listen events
function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "mouse is gone";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
//addEventListener를 사용하게 되면,
//.removeEventListener를 사용할 수 있음.
//h1.addEventListener("click", handleTitleClick);
//h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
