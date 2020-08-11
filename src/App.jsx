import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";

import { Route } from 'react-router-dom';
import Store from "./components/Store";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51HDzn1JKsbHutotxvKlHmtz3wiXpdliZHxsLfjuItbSRSOBjyTOgye48T6MJggo0gTDG7AMRS7gMPTexz7l6YdBg00FLgerniv");

export default function App() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <Route exact path='/store' component={Store} />
        <Route exact path='/checkout' component={CheckoutForm} />
      </Elements>
    </div>
  );
}
