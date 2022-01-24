//Objects

let student= {
    name:"srujan",
    age:19
}
console.log(student)
console.log(student.name)   //dot notation
console.log(student["name"])  //bracket notation

//Arrays

let lang=["c++","c","javascript","python"]
console.log(lang.length)
console.log(lang)
console.log(lang[0])


//Functions

function one(name){
    console.log("welcome "+name)
}
function two(name1,name2){
    console.log("welcome "+name1+" "+name2)
}
one("srujan")
two("Putta","Srujan")

function add(a,b){
    return a+b
}
console.log(add(4,4))