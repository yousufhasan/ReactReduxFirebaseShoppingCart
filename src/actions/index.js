import { FETCH_SERVICES,FETCH_CATEGORIES,FETCH_PRODUCTS,FETCH_PRODUCT_DETAIL,ADD_WISHLIST,REMOVE_WISHLIST,GET_WISHLIST,SUBMIT_WISHLIST,SUBMIT_CONTACTFORM } from '../constants';
import FireBaseTools from '../utils/firebase';
import { firebaseDb } from '../config';
import { getRandomInt, shuffle, getThreatLevel,firstToUpperCase } from '../utils/utils'
import _ from 'lodash';


export const getAllServices = () => {
  return (dispatch)=> {
    firebaseDb.ref("Services").on('value', (snapshot) => {
           let firebaseArray = [];
           snapshot.forEach(function(data){
               firebaseArray.push({"id":data.key,"name" : data.val().name, "description":data.val().description,"image":data.val().imageurl})
           });
           dispatch({
              type: FETCH_SERVICES,
              payload: firebaseArray
         });
    });
  };
}

export const getAllCategories = (serviceID) => {
    return (dispatch)=> {
      firebaseDb.ref(`Services/${serviceID}/Categories`).on('value', (snapshot) => {
             let firebaseArray = [];
             snapshot.forEach(function(data){
                 firebaseArray.push({"id":data.key,"name" : data.val().name, "description":data.val().description,"image":data.val().imageurl})
             });
             dispatch({
                 type: FETCH_CATEGORIES,
                payload: firebaseArray
           });
      });
    };
}

export const getAllProducts = (serviceID,categoryID) => {
  return (dispatch)=> {
      firebaseDb.ref(`Services/${serviceID}/Categories/${categoryID}/Products`).on('value', (snapshot) => {
             let firebaseArray = [];
             snapshot.forEach(function(data){
                 firebaseArray.push({"id":data.key,"name" : data.val().name, "description":data.val().description,"image":data.val().imageurl})
             });
             dispatch({
                 type: FETCH_PRODUCTS,
                payload: firebaseArray
           });
      });
    };
}

export const getProductDetails = (serviceID,categoryID,productID) => {
    return (dispatch)=> {
        firebaseDb.ref(`Services/${serviceID}/Categories/${categoryID}/Products/${productID}`).on('value', (snapshot) => {
          let object  = {"id":snapshot.key,"name" : snapshot.val().name, "description":snapshot.val().description,"image":snapshot.val().imageurl,"longdescription":snapshot.val().longdescription,"price":snapshot.val().price,"uid":snapshot.val().uid};
               dispatch({
                   type: FETCH_PRODUCT_DETAIL,
                   payload: object
                });
          });
     }; 
}

export const getWishList = () => {
    let arrwishList = [];
       if(localStorage.getItem("wishlist")){
        arrwishList = JSON.parse(localStorage.getItem("wishlist"));
       }
      return {
       type: GET_WISHLIST,
       payload: arrwishList
        }
}

export const SubmitContactUs = (props) => {
  let firebaseTools = new FireBaseTools();
      firebaseTools.addContactMessage(props);
    return {
       type: SUBMIT_CONTACTFORM,
       payload: "success"
        }
}

export const SubmitWishListForm = (props) => {
    let firebaseTools = new FireBaseTools();
      firebaseTools.addCartOrder(props);
      return {
       type: SUBMIT_WISHLIST,
       payload: "success"
        }
}

export const addToWishList = (obj) => {

  let arrwishList = [];

      if(localStorage.getItem("wishlist")){
        arrwishList = JSON.parse(localStorage.getItem("wishlist"));
        let uid = obj.uid;
        let index = _.findIndex(arrwishList, {uid});
        if(index<0) {
          arrwishList.push(obj);
        }
      }else{
          arrwishList.push(obj);
      }
    localStorage.setItem("wishlist",JSON.stringify(arrwishList));
     return {
       type: ADD_WISHLIST,
       payload: "Added"
        }

}

export const removeFromWishList = (obj) => {
        let arrwishList = JSON.parse(localStorage.getItem("wishlist"));
        let uid = obj.uid;
        let retArray = _.remove(arrwishList, {uid});
        localStorage.setItem("wishlist",JSON.stringify(arrwishList));
         return {
        type: REMOVE_WISHLIST,
        payload: arrwishList
        }
}


