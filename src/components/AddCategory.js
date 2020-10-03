import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setcaterories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSumit = (e) => {
        e.preventDefault();
        
        if( inputValue.trim().length > 2 ) {
            setcaterories( cats => [inputValue, ...cats, ]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSumit}>
            <input
                type = "text"
                value = {inputValue}
                onChange = {handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setcaterories: PropTypes.func.isRequired
}