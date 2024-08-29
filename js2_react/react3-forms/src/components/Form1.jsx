import React, { useState } from 'react'

const Form1 = () => {
    // 1. create all state variables for the controlled inputs
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(1);


    const handleSubmit = (e) =>{
        e.preventDefault();

        const newIcecream = {
            flavor, // flavor (key) : flavor (value of the variable)
            quantity,
            isReady: false
        }

        // At the end, this will be sending request to the backend 
        // and update our view
        console.log(newIcecream);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Flavor</label>
                    <input type="text" name="flavor" value={flavor} 
                        onChange={(e)=> setFlavor(e.target.value)} />
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="number" name="quantity" value={quantity} 
                        onChange={(e)=> setQuantity(e.target.value)} />
                </div>
                <button type="submit">Add</button>
            </form>


        </div>
    )
}

export default Form1