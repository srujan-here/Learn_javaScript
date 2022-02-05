let t=[
    {name:"srujansujji1717",
    age:19},
    {name:"sanjay",
    age:20},
    {name:"viraj",
    age:21}
]

let m1=t.map((t1)=>t1.age)
console.log(m1)

let r=t.map((ch)=> {
    return {
        name:ch.name,
        hh:ch.age
    }
        
    
})  //getting elements  through map
console.log(r)


//adding total age 
let s1=t.reduce((m1,m2)=>{
    return m1+m2.age
},0)
console.log(s1)


//get details of a perticular aged guy

let l=t.filter((ch)=>{
    return ch.age>20
})
console.log(l)

