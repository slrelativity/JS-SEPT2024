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
const personCopy = { ...person, firstName : "Pepper", age: 16} ;
/* BEHIND THE SCENE
    1. Create an object personCopy
    2. grab all the key-value from person, put it in personCopy  
*/
// personCopy.firstName = "Pepper"
console.log(person);
console.log(personCopy);

const animalCopy = ["dragon", ...animals, "unicorn"]; // super helpful - push without .push
console.log(animals)
console.log(animalCopy)
