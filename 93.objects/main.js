// let a=10;
// let b=20;
// let title='javascript'

// const java={
//     a:10,
//     b:20,
//     title:'java',
//     notes: {
//         intro:"welcome"
//     },
//     study(){
//         console.log("i have completed java");

//     }
// }

// java.study()
// java.books=100
// java.ggruop="hai"
// console.log(java)

//factory function

// function create(name){
//     const java={
        
            
//             notes: {
//                 intro:name
//             },
//             study(){
//                 console.log("i have completed java");
        
//             }
//         }
//         return java
// }


// var t=create("srujan")
// console.log(t)


//constructor

// function Course(tensure){
//     this.name=tensure
//     console.log("my name is "+this.name)
//     this.sugg=function(){
//         console.log("lorem lorem lorem")

//     }
// }

// const dd=new Course("fuck")
// delete dd.name

// console.log(dd)

// const t="srujan"
// console.log(t)


//primitive datatype
//pass by value
let m1=10
let m2=m1
console.log(m2)


//reference datatype
//pass by reference
let t1={num:20}
let t2=t1
t2.num=100
console.log(t1)
console.log(t2)


const data={
    name:"srujan",
    tell(){
        console.log("learn javascript")
    }
}
for(let t in data){
    console.log(t,data[t])
}