import React, { useState } from 'react'

const Form3 = () => {
    // 1. create all state variables for the controlled inputs
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(1);

    const [isSubmitted, setIsSubmitted] = useState(false);

    // Error message state variables
    const [flavorErr, setFlavorErr] = useState("");
    const [quantityErr, setQuantityErr] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newIcecream = { flavor, quantity, isReady: false}

        // At the end, this will be sending request to the backend 
        // and update our view
        console.log(newIcecream);
        setIsSubmitted(true);
    }

    const formMessage = () =>{
        if(isSubmitted){
            return `Thank you, ${flavor} will be ready for you in a minute`;
        }else{
            return "Please fill in the form and add your icecream";
        }
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
            <h3>Form3</h3>
            <p>{formMessage()}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Flavor</label>
                    <input type="text" name="flavor" value={flavor} 
                        onChange={handleFlavor} 
                        className={flavorErr?"error":""}
                        />
                    <p style={{color: "red"}}>{flavorErr}</p>
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="number" name="quantity" value={quantity} 
                        onChange={handleQuantity} />
                    <p style={{color: "red"}}>{quantityErr}</p>
                </div>
                <button type="submit">Add</button>
            </form>


        </div>
    )
}

export default Form3