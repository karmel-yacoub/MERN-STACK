class ninja {
    constructor (name,health){
        this.name= name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name,this.health,this.speed,this.strength);
    }
    drinkSake(){
        this.health +=10;
    }

}

const khalil=new ninja("khalil", 100);
khalil.sayName();
khalil.drinkSake();
khalil.showStats();