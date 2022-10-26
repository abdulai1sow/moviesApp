import { useState } from 'react';
import React from 'react'

const Form = (props) => {
  const { movieSearch } = props;
//state to hold the form data for multiple input
  const [formData, setFormData] = useState({searchTerm: ''})

//state to hold the form data for multiple input
// const [formData, setFormData] = useState({ name: '', lastName: '', dob: '' })
  
  //handle change on all input
  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    //stop the form from refreshing the page
    e.preventDefault()
    movieSearch(formData.searchTerm)
    setFormData({searchTerm: ''})
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input type="text" value={formData.searchTerm} onChange={handleChange} name='searchTerm' required />
        
        <input type="submit" value='search'/>
      </form>
    </div>
  )
}

export default Form