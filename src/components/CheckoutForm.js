import React, { useState } from "react";
import { useForm } from '../hooks/useForm';

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  //Custom hook
  const [values, handleChanges] = useForm(initialValue);
  //checking values
  console.log(values, "checking values");
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            id="id"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input type="text" name="city" id="city" value={values.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input type="text" name="state" id="state" value={values.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input type="text" name="zip" id="zip" value={values.zip} onChange={handleChanges} />
        </label>
        <button type="submit" >Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  ); 
}

export default CheckoutForm;
