import React from 'react';
import { Helmet } from "react-helmet";
import { Provider } from 'react-redux';
import store from './store';

import CalculatorForm from './components/calculatorForm';

const App = () => {
  return (
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Margin Tax Calculator</title>
        <meta name="description" content="Calculate the margin tax" />
      </Helmet>
      <CalculatorForm />
    </Provider>
  );
};

export default App;