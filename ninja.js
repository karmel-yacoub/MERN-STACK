class Ninja {
    constructor (name,health,speed=3,strength=3){
        this.name= name;
        this.health=health;
        this.speed= speed;
        this.strength=strength;
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

const khalil=new Ninja("khalil", 100);
khalil.sayName();
khalil.drinkSake();
khalil.showStats();

class Sensei extends Ninja {
    constructor (name){
        super(name,200,10,10)
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log(this.health);
    }  
}
const karmel=new Sensei("karmel");
karmel.speakWisdom();
karmel.showStats();