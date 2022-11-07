import { 
	SET_LOADING,
	GET_TAX,
} from '../actions';

export const initialState = {
	loading: false,
	error: false,
	tax: []
};

export default(state = initialState, {type, payload}) => {
	switch(type) {
		case SET_LOADING:
			return {
				...state,
				error: false,
				loading: true
			};
		case GET_TAX:
			if(!payload.hasOwnProperty('tax_brackets')) {
				return {
					...state,
					error: true,
					loading: false
				};
			}
			return {
				...state,
				tax: payload.tax_brackets,
				error: false,
				loading: false
			};
		default:
			return state;
	}
};