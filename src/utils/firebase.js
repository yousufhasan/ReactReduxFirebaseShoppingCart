
import { FIREBASE_CONFIG } from '../config';
import { firebaseDb } from '../config';
import Firebase from 'firebase';
export default class FireBaseTools {

	addCartOrder(cartOrder) {
			let arrwishList = JSON.parse(localStorage.getItem("wishlist"));
			let userCart = [];
			for(let item of arrwishList) {
				userCart.push(item.uid);
			}
			cartOrder.userCart = userCart;
	 		firebaseDb.ref().child('Orders').push(cartOrder);	 
	 		localStorage.removeItem("wishlist");
	}
	addContactMessage(message){
			firebaseDb.ref().child('Messages').push(message);	
	}
}