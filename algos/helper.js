// Array
const animalList =["cats", "dogs", "pokemons", "unicorn", "dragons"]

// Object
const pet ={
  petname: "Pepper",
  age: 16,
  haircolor: "White"
}

// Adding proto
const proto = { eyecolor: "green", protoFunction: "protoValue" };
const petWithProto = Object.assign(Object.create(proto), pet);

// loop through an array (normal for-loop)
for(let i = 0 ; i < animalList.length ; i++){
    console.log(animalList[i]);
}

// loop through an array (for...of)
for(const eachAnimal of animalList){
    console.log(eachAnimal);
}

// loop through an object (for ...in)
for(const eachKey in petWithProto){
    console.log(Object.hasOwn(petWithProto, eachKey));
    console.log(`${eachKey} : ${petWithProto[eachKey]}`);
}

console.log(Object.entries(petWithProto));
