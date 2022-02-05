let t=[1,2,3]
console.log(t)

let t1=new Array(1,2,3)
console.log(t1)


//push
t1.push(4)
//unshift
t1.unshift(0)
console.log(t1)

//pop
t1.pop(4)

//shift
t1.shift(0)

console.log(t1)

//indexOf

const m1=["sru","sri","siri","alexa","vimal","sri"]
console.log(m1.indexOf("sri"))
console.log(m1.indexOf("sri",2))

//lastindexOf

console.log(m1.lastIndexOf("sri"))


//Includes[only used for primitive datatypes]

console.log(m1.includes("sarvesh"))
console.log(m1.includes("sri"))


//find method

let object=[{name:"srujan",     
age:19},{name:"siri",
age:15},{name:"sarvesh",
age:19}]

console.log(object.find(function(ele){   //inline callback function
    return ele.age === 19
}))


console.log(object.find((ele) =>ele.age===15))  //Arrow function


//concatination

let n1=[1,2,3,4,5]
let n2=[6,7,8,9,10]
let n3=n1.concat(n2)
console.log(n3)
let n4=[...n1,...n2]    //concatination using spread operator


console.log(n1.slice(1,5))


//for loop


for(let i=0;i<n1.length;i++){
    console.log(n1[i]);
}


//for of

for(let t of n1){
    console.log(t)
}

//for each

n1.forEach(function(j1,j2){
    console.log(j1,j2)
})


//join 

let name=['s','r','u','j','a','n'];
console.log(name.join(''))

//split

console.log(name.split(''))

//filter

