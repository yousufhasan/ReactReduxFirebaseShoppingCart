import { FETCH_SERVICES,FETCH_CATEGORIES,FETCH_PRODUCTS,FETCH_PRODUCT_DETAIL,ADD_WISHLIST,GET_WISHLIST,REMOVE_WISHLIST,SUBMIT_WISHLIST,SUBMIT_CONTACTFORM } from '../constants'


const INITIAL_STATE = { message: null };

export default (state = INITIAL_STATE, action ) => {

	switch(action.type) {
	case FETCH_SERVICES:
		return {...state, services: action.payload };
	case FETCH_CATEGORIES:
		return {...state, categories: action.payload };
	case FETCH_PRODUCTS:
		return {...state, products: action.payload };
	case FETCH_PRODUCT_DETAIL:
		return {...state, productDetail: action.payload };
	case ADD_WISHLIST:
		return {...state, addwishlist: action.payload };
	case REMOVE_WISHLIST:
		return {...state, wishlist: action.payload };
	case GET_WISHLIST:
		return {...state, wishlist: action.payload };
	case SUBMIT_WISHLIST:
		return {...state, submit: action.payload };
	case SUBMIT_CONTACTFORM:
		return {...state, contact: action.payload };
	default:
    	return state;
	}
}