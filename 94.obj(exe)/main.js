const shop={
    item:"soap",
    price:20,
    code:2828
}
console.log(shop)


//factory function

function store(){
    return {item:"soap",
    price:20,
    code:2828}
}
let t=store();
console.log(t)


//constructor fuction

function Store1(){
    this.name="srujan",
    this.subject="maths",
    this.credits=5,
    this.cost=100,
    this.discount=function(){
        return (cost*20)/100;
    }
}

let m=new Store1()
console.log(m)