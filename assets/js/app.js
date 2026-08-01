const themeButton=document.getElementById("themeToggle");

themeButton.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeButton.textContent="☀️";

}else{

themeButton.textContent="🌙";

}

});