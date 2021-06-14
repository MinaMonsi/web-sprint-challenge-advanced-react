import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    //arrange
    render(<CheckoutForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i); 
    const zipInput = screen.getByLabelText(/zip/i);
    const 
    const submitButton = screen.getByRole("button");

    //act
    userEvent.type(firstNameInput, "Bailey");
    userEvent.type(lastNameInput, "Perez");
    userEvent.type(addressInput, "915 North Bridge Ave");
    userEvent.type(cityInput, "Weslaco");
    userEvent.type(stateInput,"Texas");
    userEvent.type(zipInput,"78596");
    userEvent.click(submitButton);

    //assert
    const message = screen.queryByTestId("successMessage")
    expect(message).toBeInTheDocument

});
