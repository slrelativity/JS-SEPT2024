import React, { useState } from 'react'

const IcecreamForm = (props) => {
    // Form concerns the form input ONLY. Create state variables to keep track of the input change


    const handleSubmit = (e) => {
        e.preventDefault();
        // After submit, update the list AT PARENT! Call/execute that function that is passed down by the parent
    }

    return (
        <fieldset>
            <legend> IcecreamForm.jsx</legend>
            {/* jsx for form with all the onChange & onSubmit */}
        </fieldset>
    )
}

export default IcecreamForm