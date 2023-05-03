import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
    };
    props.sendFormDataSomewhere(formData);
    setFirstName("");
    setLastName("");
  }



  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    
  );
}

export default Form;

//to control a form with state, we want to set up a way to submit our form. For this, we add the onSubmit event listener to our form element.
//whenever the form is submitted (by pressing the Enter or Return key in an input field, or by clicking a Submit button), the handleSubmit callback function will be called. 




