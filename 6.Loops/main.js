//for..loop
for(let i=0;i<10;i++){
    console.log("welcome javascript");
}

//while..loop
let i=0;
while(i<10){
    console.log("welcome javascript");

    i++;
}

//Do_While..loop
let j=0;
do{
    console.log("welcome javascript");
    j++;

}
while(j<10)

//for..IN..loop in Objects
let details={
    name:"srujan",
    age:19
}
for(let key in details){
    console.log(key,details[key])
}


//Arrays
let ar=["srujan","srinivas","siri","geetha"]
for(let names in ar){
    console.log(names,ar[names]);
}

//for..Of..loops
for(let nam of ar){
    console.log(nam)
}