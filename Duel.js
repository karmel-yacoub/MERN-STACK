class Card {
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}


class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
       
    }
  attack(target){
      if(target instanceof Unit){
        
            target.res -=this.power;
             
      }else{
        throw new Error("Target must be a unit!");
      }
  }  
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }
    play(target) {
            if (target instanceof Unit) {
                if (this.stat == "power") {
                    console.log(this.name, this.stat , this.magnitud);
                    target.power += this.magnitude;
                } else if (this.stat == "resilience") {
                    console.log(this.name, this.stat, this.magnitude);
                    target.res += this.magnitude;
                }
            } else {
                throw new Error("Target must be a unit!");
            }
        }
}

    
const RedBeltNinja = new Unit("Red",3,3,4);
const BlackBeltNinja = new Unit("Black",4,5,4);


const HardAlgorithm = new Effect ("Hard Algorithm",2,"	increase target's resilience by 3","resilience",+3)
HardAlgorithm.play(RedBeltNinja);
const UnhandledPromiseRejection = new Effect("PromiseRejection",1,"reduce target's resilience by 2","resilience",-2)
UnhandledPromiseRejection.play(RedBeltNinja);
const PairProgramming = new Effect ("Pair Programming",3,"increase target's power by 2","power",+2);
RedBeltNinja.attack(BlackBeltNinja);
console.log(RedBeltNinja);
console.log(BlackBeltNinja);
