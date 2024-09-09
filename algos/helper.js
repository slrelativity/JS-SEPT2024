// Array
const animalList =["cats", "dogs", "pokemons", "unicorn", "dragons"]

// Object
const pet ={
  petname: "Pepper",
  age: 14,
  haircolor: "White"
}

// Adding proto
const proto = { eyecolor: "green", protoFunction: "protoValue" };
const petWithProto = Object.assign(Object.create(proto), pet);

// loop through an array (normal for-loop)

// loop through an array (for...of)


// loop through an object (for ...in)

