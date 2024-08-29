import React, { useState } from 'react'

const CRUDForm = () => {
    // keep track of changes within the form input
    const [flavor, setFlavor] = useState("");
    const [quantity, setQuantity] = useState(1);


    // 1. Create a state variable to keep track of the changes whenever someone add a new valid icecream
    const [icecreamList, setIcecreamList] = useState([
        {flavor : "Vanilla", quantity: 1, isReady : false},
        {flavor : "Jasmine", quantity: 2, isReady: true},
        {flavor : "Strawberry", quantity: 1, isReady: true},
    ])


    const handleSubmit = (e) =>{
        e.preventDefault();
        const newIcecream = { flavor, quantity, isReady: false}
        addIcecreamToList(newIcecream)
    }

    const addIcecreamToList = (newIcecream) =>{
        // 2. add the newIceream to the list
        setIcecreamList([...icecreamList, newIcecream]);
        clearForm();
    }

    const clearForm = () =>{
        setFlavor("")
        setQuantity(1)
    }

    // REMOVE item from the list
    const removeIcecreamByIdx = (deleteIdx)=>{
        setIcecreamList(icecreamList.filter((eachIcecream, idx)=> idx !== deleteIdx))
    }

    const handleFlavor = (e) =>{
        const val = e.target.value
        setFlavor(val)
        if(val.length < 1){
            setFlavorErr("Flavor is required!");
        }else if(val.length < 2){
            setFlavorErr("Flavor must be at least 2 characters long");
        }else{
            setFlavorErr("");
        }
    }

    const handleQuantity = (e)=>{
        const {value} = e.target; // If you want to destructure the value
        setQuantity(value);
        if(value < 1){
            setQuantityErr("Quantity must be at least 1");
        }else{
            setQuantityErr("");
        }
    }

    return (
        <div>
            <h3>CRUD form</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Flavor</label>
                    <input type="text" name="flavor" value={flavor} 
                        onChange={handleFlavor} 
                        />
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="number" name="quantity" value={quantity} 
                        onChange={handleQuantity} />
                </div>
                <button type="submit" >Add</button>
                <button type="button" onClick={clearForm}>Reset</button>
            </form>
            <fieldset>
                <p>Input flavor: {flavor}</p>
                <p>Input quantity: {quantity}</p>
            </fieldset>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Flavor</th>
                            <th>Quantity</th>
                            <th>Ready?</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            icecreamList.map((eachIcecream, idx)=>{
                                return (
                                    <tr key={idx}>
                                        <td>{eachIcecream.flavor}</td>
                                        <td>{eachIcecream.quantity}</td>
                                        <td>{eachIcecream.isReady?"Yes":"No"}</td>
                                        <td><button onClick={()=>removeIcecreamByIdx(idx)}>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default CRUDForm