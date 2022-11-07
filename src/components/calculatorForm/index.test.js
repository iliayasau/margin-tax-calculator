import React from 'react';
import renderConnected from '../../utils/renderConnected';
import CalculatorForm from './';

describe('renders SearchForm', () => {
  let wrapper, getByText;
  const initialState = {
    loading: false,
    tax: []
  };

  beforeEach(() => {
    const utils = renderConnected(<CalculatorForm />, { initialState });
    wrapper = utils.container;
    getByText = utils.getByText;
  });

  it('renders the component', () => {
    expect(wrapper.querySelector('input')).toBeInTheDocument();
  });
});
