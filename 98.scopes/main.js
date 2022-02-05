//local scope
name="srujan"              //name is declared globally
function one(){
    let n="siri"
    console.log(name)
}
one("srujan")
console.log(name)
// console.log(n)            //n is declared locally



function sru(){
    let t1="wonder" //local scope of child sri()
    console.log(t1)

    function sri(){
console.log(t1);
    }
    sri()

}

sru();


//block scope

var x=10000

function tell(){
    x=10;
    console.log(x)
}
tell();
console.log(x);  //here x=10 is due to block scope



//lexical scope[same as inheritance]



