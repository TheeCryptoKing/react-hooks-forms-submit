// You can contrast this to handling an uncontrolled form being submitted, in which case you would need to access the input fields from the DOM instead of accessing the values from state:

// function handleSubmit(event) {
//   event.preventDefault();
//   // in an uncontrolled form, you need to access the input fields from the DOM
//   const formData = {
//     firstName: e.target[0].value,
//     lastName: e.target[1].value,
//   };
//   props.sendFormDataSomewhere(formData);
// }

// we'll demonstrate submission by modifying our Form component to access submitted values from state and list them in the DOM:

// import React, { useState } from "react";

// function Form() {
//   const [firstName, setFirstName] = useState("Sylvia");
//   const [lastName, setLastName] = useState("Woods");
//   const [submittedData, setSubmittedData] = useState([]);

//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//   }
//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//   }
//   function handleSubmit(event) {
//     event.preventDefault();
//     const formData = { firstName: firstName, lastName: lastName };
//     const dataArray = [...submittedData, formData];
//     setSubmittedData(dataArray);
//     setFirstName("");
//     setLastName("");
//   }
//   const listOfSubmissions = submittedData.map((data, index) => {
//     return (
//       <div key={index}>
//         {data.firstName} {data.lastName}
//       </div>
//     );
//   });
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={handleFirstNameChange} value={firstName} />
//         <input type="text" onChange={handleLastNameChange} value={lastName} />
//         <button type="submit">Submit</button>
//       </form>
//       <h3>Submissions</h3>
//       {listOfSubmissions}
//     </div>
//   );
// }
// export default Form;

// The above component will render previous form submissions on the page! We have a fully functioning controlled form.
//One benefit we get from having our form's input values held in state is an easy way to perform validations when the form is submitted.
//let's say we want to require that a user enter some data into our form fields before they can submit the form successfully.
//One benefit we get from having our form's input values held in state is an easy way to perform validations when the form is submitted.
//let's say we want to require that a user enter some data into our form fields before they can submit the form successfully.
//we can add some validation logic to check if the form inputs have the required data, and hold some error messages in state

// add state for holding error messages
// const [errors, setErrors] = useState([]);

// function handleSubmit(event) {
//   event.preventDefault();
//   // first name is required
//   if (firstName.length > 0) {
//     const formData = { firstName: firstName, lastName: lastName };
//     const dataArray = [...submittedData, formData];
//     setSubmittedData(dataArray);
//     setFirstName("");
//     setLastName("");
//     setErrors([]);
//   } else {
//     setErrors(["First name is required!"]);
//   }
// }
// Then, we can display an error message to our user in the JSX:

// return (
//   <div>
//     <form onSubmit={handleSubmit}>
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//     {/* conditionally render error messages */}
//     {errors.length > 0
//       ? errors.map((error, index) => (
//           <p key={index} style={{ color: "red" }}>
//             {error}
//           </p>
//         ))
//       : null}
//     <h3>Submissions</h3>
//     {listOfSubmissions}
//   </div>
// );



