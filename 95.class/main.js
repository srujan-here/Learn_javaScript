//declaring class

class Store{
    constructor(item,cost,discount,tag){
        this.item=item
        this.cost=cost
        this.discount=discount
        this.tag=tag
    }
}
let t=new Store("java",20,2,100)
console.log(t)


let r=class Store{
    constructor(item,cost,discount,tag){
        this.item=item
        this.cost=cost
        this.discount=discount
        this.tag=tag
    }
    get dicval(){
        return this.discount
    }
    set dimcval(set){
        this.discount=set
    }
}

let m1=new r("kl",5,1,200)
console.log(m1)



//extended classes


class Srujan{
    constructor(fname){
        this.fname=fname
    }
    getf1name(){
        return this.fname;
    }
}

class siri extends Srujan{
    constructor(fname){
        super(fname)
    }
    getfname(){
        return this.fname
    }
}

let sru=new siri("srinivas")
console.log(sru)