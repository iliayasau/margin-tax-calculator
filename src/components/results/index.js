import React from 'react';
import PropTypes from 'prop-types';
import {
	TotalTax
} from './styles';

const Results = ({
	tax, salary
}) => {
	
	return (
    <TotalTax>
      {tax.map((item) => {
			const {
				min, max, rate
			} = item;
			const salaryNumber = parseInt(salary);
			const rateNumber = parseFloat(rate);
			const minNumber = parseInt(min);
			const maxNumber = parseInt(max);
			if ((minNumber < salaryNumber) && (salaryNumber <= maxNumber)) {
				console.log('total: ', salaryNumber*rateNumber);
				return parseInt(salaryNumber*rateNumber);
			}
      })}
    </TotalTax>
  );
}

Results.propTypes = {
	tax: PropTypes.array.isRequired,
	salary: PropTypes.string.isRequired,
};

export default Results;