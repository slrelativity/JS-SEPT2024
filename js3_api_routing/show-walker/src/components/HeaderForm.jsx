import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";

const HeaderForm = () => {
    const [category, setCategory] = useState("");
    const [id, setId] = useState(1);

    const navigate = useNavigate();

    // What should happen after submission : redirect to a different route with category & id
    const handleSubmit =(e) =>{
        e.preventDefault();

        navigate(`/${category}/${id}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Search for: 
                <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option hidden>-- PLEASE PICK A CATEGORY --</option>
                    <option value="shows">Show</option>
                    <option value="people">People</option>
                </select>
                ID: 
                <input type="text" value={id} onChange={e=>setId(e.target.value)} />
                <button type="submit">Search</button>

                </p>
            </form>

        </div>
    )
}

export default HeaderForm