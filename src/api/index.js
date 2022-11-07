import axios from 'axios';

export const getTax = async (payload) => {
	try {
		const tax = await axios.get(`http://localhost:5000/tax-calculator/brackets/${payload}`);
		console.log('tax in api:', tax);
		return tax.data;
	} catch(err) {
		return err;
	};
};