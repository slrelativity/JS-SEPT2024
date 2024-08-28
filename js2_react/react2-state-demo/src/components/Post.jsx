import React, {useState} from 'react'

const Post = (props) => {
    const {title, size} = props;

    // to create the state variable using the size from props
    const [dynamicSize , setDynamicSize] = useState(size);

    const fontStyle = {
        fontSize : dynamicSize
    }

    // create a function to update the state
    const handleDynamicSize = (num)=>{
        setDynamicSize(dynamicSize + num); // take some time to update the state
        console.log(dynamicSize) // this won't be accurate as it will log the old state number
        // setDynamicSize((prevState)=>prevState * 2); // 20 --> 21 (prevState) --> 42
    }

    return (
        <fieldset>
            <legend>Post.jsx</legend>
            <h3 style={fontStyle}>{title} ({dynamicSize})</h3>
            <button onClick={()=>handleDynamicSize(1)}>Size up</button>
            <button onClick={()=>handleDynamicSize(-1)}>Size down</button>
        </fieldset>
    )
}

export default Post