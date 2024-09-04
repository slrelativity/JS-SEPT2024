import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const KeywordPage = () => {
    const [keyword, setKeyword] = useState("");
    const [color, setColor] = useState("");

    const navigate = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        // send info to database
        navigate(`/location/${keyword}/${color}`) //    /location/hawaii/yellow
    }

    return (
        <fieldset>
            <legend>KeywordPage.jsx</legend>
            <form onSubmit={handleSubmit}>
                <h3>Type in a place</h3>
                <input type="text" name="keyword" value={keyword}  placeholder='Enter a place'
                    onChange={e=>setKeyword(e.target.value)} />

                <input type="text" name="color" value={color} placeholder='Enter a color'
                    onChange={e=>setColor(e.target.value)} />
                <button type="submit">Search</button>
            </form>


        </fieldset>
    )
}

export default KeywordPage