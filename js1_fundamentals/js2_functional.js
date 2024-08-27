// ------ callback functions -------

const makingPurchase = (person, price) =>{ 
    console.log(`Processing purchase for ${person}, charged ${price}`)
}

const returningItem = (person, price) =>{
    console.log(`Processing refund for ${person}, ${price} will be issued at ${person}'s bank account`)
}

//                         function      string  number
const registerCounter = (customerAction, person, price) =>{
    console.log("Hello! Welcome to the store");
    customerAction(person, price); // executing function
}

registerCounter(makingPurchase, "Heidi", 100);
registerCounter(returningItem, "Pepper", 20);



const shoppingList = Object.freeze([
    {id: 3, item: "Pepper's food", price: 1.29, shops: ["petco", "amazon"], required: true}, 
    {id: 5, item: "red gamer chair", price: 300, shops: ["amazon", "BestBuy"], required: false},
    {id: 9, item: "soup dumplings", price: 3.29, shops: ["Trader Joes"], required: true},
    {id: 2, item: "Air ticket to Barcelona", price: 600, shops: ["Expedia"], required: false}, 
    {id: 10, item: "custard tart", price: 3.99, shops: ["Trader Joes"], required: true}     
])

// ------ .map & .filter -------
// Traditional for-loop to return an array of price
const priceArr = [];
for(const eachItem of shoppingList){
    priceArr.push(eachItem.price);
}
console.log(priceArr);


// --- .map() ---
// long-handed 
const priceArr2 = shoppingList.map((eachItem)=>{
                    return eachItem.price;
})

// short-handed
const priceArr3 = shoppingList.map((eachItem)=>eachItem.price)
console.log(priceArr3)

const productDetailsArr = shoppingList.map((eachItem)=>{
    return `<li>${eachItem.item} - ${eachItem.price}</li>`
})

console.log(productDetailsArr);


// --- .filter() ---
//return an array of items with price<100
const cheapItemArr = shoppingList.filter((eachItem)=>{
    return eachItem.price < 100;
})

console.table(cheapItemArr)

// return a list of cheap items with only the names
const cheapItemNames = shoppingList.filter((eachItem) => eachItem.price<100)
                                   .map((eachItem)=> eachItem.item);

console.log(cheapItemNames);

// CRUD

// create a new shoppingList with a new item

// create a new shoppingList without  an item

// create an updated shoppingList with a minor change in one of the items
