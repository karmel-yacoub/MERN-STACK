
// let example = "I'm the example!";
// console.log(example); 

// 1)
console.log(hello);                                   
var hello = 'world';                                 
//  the out put = undefined
//  the correct way
var hello = 'world';
console.log(hello);
// 2)
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// the out put= megnet
// 3)
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// the out put=super cool

// 4)
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// the out put = chicken   half chicken

// 5)
// console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);

// 6)
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// the out put =
// undefined
// rock
// r&b
// disco

// 7)
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// the out put =san jose
// seattle
// burbank
// san jose

// 8)
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
//         dojo= "closed for now";
//         dojo.state= "closed for now";
        let {dojo:state}= "closed for now";
    }
    return dojo;
}



