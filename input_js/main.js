let t=document.querySelector("button");
t.addEventListener("click",enter_name);
function enter_name(){
    let m=prompt("Enter Your Name");
    t.textContent="my name is "+m;
}