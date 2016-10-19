import React, { Component } from 'react';
import SectionHeader from '../components/section_header';
import INNERMENUSEPERATOR from '../components/innermenu_seperator';
import Spinner from 'react-spinner';
import { reduxForm } from 'redux-form';
import { SubmitWishListForm } from '../actions';

class SubmitWishList extends Component {
	 onSubmit(props) {
   		this.props.SubmitWishListForm(props);
 	 }
	render(){
		if(this.props.message.submit == "success" ){
            	return  <div><INNERMENUSEPERATOR /><div className="inner_page"><div className="sucess-message"> Submitted Successfully ! </div></div></div>
        }

	 const { fields: { name,phoneNumber,address,email,message}, handleSubmit } = this.props;
		return (
		 <section>
			 <INNERMENUSEPERATOR />
			 <div className="submit-form"> 				
				<div className="container">
    				<SectionHeader heading="Submit Form" />
		<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <div className={`md-form ${name.touched && name.invalid ? 'has-danger' : ''}`}>
          <i className="fa fa-user prefix"></i>
          <input type="text" className="form-control" {...name} />
           <label>Name</label>
          <div className="text-help">
            {name.touched ? name.error : ''}
          </div>
        </div>
        <div className={`md-form ${phoneNumber.touched && phoneNumber.invalid ? 'has-danger' : ''}`}>
          <i className="fa fa-phone prefix"></i>
          <input type="text" className="form-control" {...phoneNumber} />
           <label>Phone Number</label>
          <div className="text-help">
            {phoneNumber.touched ? phoneNumber.error : ''}
          </div>
        </div>
         <div className="md-form">
          <i className="fa fa-home prefix"></i>
          <input type="text" className="form-control" {...address} />
           <label>Address</label>      
        </div>
        <div className="md-form">
          <i className="fa fa-inbox prefix"></i>
          <input type="text" className="form-control" {...email} />
           <label>Email</label>      
        </div>
        <div className="md-form">
          <i className="fa fa-pencil prefix"></i>
          <textarea type="text" className="md-textarea" {...message}></textarea>
           <label>Message</label>      
        </div>
		<div className="text-xs-center">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
   
      </form>
      </div> </div>
 </section>
		);
	}
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Please enter your Name';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Please enter your Phone Number';
  }
  if (!values.address) {
    values.address= 'N/A';
  }
  if (!values.email) {
    values.email = 'N/A';
  }
  if (!values.message) {
    values.message = 'N/A';
  }
  return errors;
}


function mapStateToProps(state) {
    return {message: state.message}
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps


export default reduxForm({
  form: 'formWishList',
  fields: ['name','phoneNumber','address','email','message'],
  validate
}, mapStateToProps, {SubmitWishListForm})(SubmitWishList);