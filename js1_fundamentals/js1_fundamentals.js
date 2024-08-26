// ------------- scope ------------

const beatles = ['Paul', 'George', 'John', 'Ringo']
function printNames(names) {
   const innerScope = "what can access me?"
	for(let i = 0; i < beatles.length; i++){
		console.log(beatles[i])
    }
//Runs after the loop has completed
// console.log(i) // won't work because i is outside the scope!!

   function innerFunction() {
      const deepScope = "can innerScope access me?"
  }
}
printNames(beatles); 

// ------------- const & let ------------
// let - can be reassigned
// const - cannot be reassigned
for(let i = 0 ; i< 3 ; i++){
    console.log(i);
}

const skills = ["breaking the code", "fixing the bugs", "bootstrap"];
skills.push("tailwind"); // works - doesn't reassign skills, still the same array with more element
// skills = "testing"; // doesn't work - this is reassignment of variable
console.log(skills);

// ------------- destructuring ------------
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};

// const firstName = person.firstName;
// const lastName = person["lastName"];
// const email = person.email;
const { firstName, lastName, email, age, password: secret} = person
/* BEHIND THE SCENE
    1. Create the variables - firstName, lastName, email, age, secret
    2. Search for the person.firstName, person.lastName, person.email , person.age is undefined, person.password for secret
    3. assign the value to the variable created
*/

console.log(firstName, lastName, email, secret)
console.log(age)


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [ , secondAnimal, , fourthAnimal ] = animals;
console.log(secondAnimal, fourthAnimal)


// ------------- spread/rest ------------
// Creating copies of the arr/object elements 
const personCopy = { 
    ...person, 
    firstName : "Pepper",  // will overwrite the firstName "Bob"
    age: 16 // will add this key-value pair
} ;

const personCopy2 = {...person, firstName : "Pepper",  age: 16} ; // same as the above
/* BEHIND THE SCENE
    1. Create an object personCopy
    2. grab all the key-value from person, put it in personCopy  
*/
// personCopy.firstName = "Pepper"
console.log(person);
console.log(personCopy);

const mythicalAnimals = ["dragon", ...animals, "unicorn"]; // super helpful - push without .push
console.log(animals)
console.log(mythicalAnimals)

// ------------- arrow function ------------

function sayHello(name){
    console.log("Hello, " + name);
}

// created a variable "sayHello2", the variable stores a function
const sayHello2 = function(name){
    console.log("Hello, " + name);
}

const sayHello3 = (name) => {
    console.log("Hello, " + name);
}

const sayHello4 = name => console.log("Hello, " + name);

// execute the function
sayHello4("Pepper");


// a function that return something
function changePrice(price, discount){
    return price * discount;
}

// longhanded arrow function
const changePrice2 = (price, discount) => {
    return price * discount;
}

// short handed arrow function - without {}, implicit return (no need to type return)
const changePrice3 = (price, discount) => price * discount;

const changePrice4 = (price, discount) => ( // () could also provide an implicit return
    price * discount // hidden return is present when they run the code
)

const newPrice = changePrice4(100, 0.9);
console.log(newPrice);


// ------------- ternary operator ------------


const canAfford = (itemPrice, accountBalance) =>{
    if(itemPrice > accountBalance) {
        return `Cannot afford!`
    }
    else {
        return "Can afford!";
    }
}

// (condition)?if-result : else-result 
// longhanded way with {} & return
const canAfford2 = (itemPrice, accountBalance) => {
    return (itemPrice > accountBalance)? "Cannot afford!" :  "Can afford!";
}

// short-handed without {} & implicit return (hidden return)
const canAfford3 = (itemPrice, accountBalance) => 
    (itemPrice > accountBalance)? "Cannot afford!" :  "Can afford!";

let myAccountBalance = 1000;
const drone = 1001;
const chair = 299;
console.log(canAfford3(drone, myAccountBalance));
console.log(canAfford3(chair, myAccountBalance));


const rating = 6;
rating > 5?
    console.log("The movie is great") : 
    console.log("Not a good movie");


// && - short-circuit logical operator for if without else
rating>7 && console.log("This is awesome")
// if all the conditions before && are TRUE, execute the right hand side