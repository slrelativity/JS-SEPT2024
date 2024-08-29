import React, { useState } from 'react'

const Form2 = () => {
    // 1. create all state variables for the controlled inputs
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(1);

    // To keep track of the change when people hit submit
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newIcecream = { flavor, quantity, isReady: false}

        // At the end, this will be sending request to the backend 
        // and update our view
        console.log(newIcecream);
        setIsSubmitted(true);
    }

    return (
        <div>
            <h3>Form2</h3>
            {
                isSubmitted?
                    <p>Thank you for the submission, {flavor} will be ready for you in a minute</p>:
                    <p>Please fill in the form and add your icecream</p>
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Flavor</label>
                    <input type="text" name="flavor" value={flavor} 
                        onChange={(e)=> setFlavor(e.target.value)} />
                    {
                        flavor.length < 2 &&
                        <p>Flavor must be at least 2 characters long</p>
                    }
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="number" name="quantity" value={quantity} 
                        onChange={(e)=> setQuantity(e.target.value)} />
                    {
                        quantity < 1 && 
                        <p>Quantity must be at least 1</p>
                    }
                </div>
                <button type="submit">Add</button>
            </form>


        </div>
    )
}

export default Form2