import React from 'react';
import CreditCardForm from "./Payment2";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
const Paymant2 = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">React Animated Credit Card UI Example</h2>
            <CreditCardForm/>
        </div>
    );
};

export default Paymant2;
