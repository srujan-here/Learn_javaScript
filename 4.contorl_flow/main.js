let t=document.querySelector("button");
t.addEventListener("click",sru);
function sru(){
    let m=prompt('enter a number from 1 to 10');
    if(m<=5){
        alert("keep going on!");
    }
    else if(m>5 && m<9){
        alert("good keep it up");
    }
    else if(m==10){
        alert("you rocked it!!🔥")
    }
    else{
        alert("please enter a valid input");
    }
}