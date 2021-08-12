import React from 'react';

const Form = ({ handleChange, handleSubmit }) => {
    return (
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Add a new status code!</h1>
            <label htmlFor="status">Status Code:</label>
            <input type="text" id="status" name="status" onChange={handleChange}/>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" onChange={handleChange}/>
            <label htmlFor="img_url">Image URL:</label>
            <input type="text" id="img_url" name="img_url" onChange={handleChange}/>
            <input type="submit" value="Submit" />
          </form> 
        </div>
    )
};

export default Form;