import React, { Component } from 'react';
import SectionHeader from '../components/section_header';
import INNERMENUSEPERATOR from '../components/innermenu_seperator';
import Spinner from 'react-spinner';
import { reduxForm } from 'redux-form';
import { SubmitContactUs } from '../actions';


class ContactUs extends Component {

	 onSubmit(props) {
   		this.props.SubmitContactUs(props);
   		this.props.resetForm();

 	 }

   showSeperator () {
      if(this.props.home != true) {
      return <INNERMENUSEPERATOR />
      }
    }
    renderClass() {
      if(this.props.home != true) {
        return 'contact_us inner_page';
      }else {
        return 'contact_us';
      }
    }

   selectDelay(delay) {
     if(this.props.home != true) {
        return '';
      }
      return delay;
   }
 	 renderSuccess() {
 	 	 if(this.props.message.contact=='success') {
 	 	 	return <p className='sucess-message'> Submitted Successfully ! </p>;
 	 	 }
 	 }

 	 render(){
 	 	 const { fields: { name,email,message}, handleSubmit } = this.props;


 	 	return (
    <div>
    {this.showSeperator()}
    <section className={this.renderClass()}>
    <SectionHeader heading="Contact Us"/>
    <div className="container">
    <div className="row">
 	 		<div className="card wow zoomIn contact-us-block" data-wow-delay={this.selectDelay("0.2s")}>
                         <div className="card-block">
                                <div className="text-xs-center">
                                    <h3><i className="fa fa-envelope"></i> Write to us:</h3>
                                    <hr />
                                </div>
                               <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                <div className={`md-form ${name.touched && name.invalid ? 'has-danger' : ''}`}>
                                    <i className="fa fa-user prefix"></i>
                                    <input type="text" id="form3" className="form-control" {...name} />
                                    <label htmlFor="form3">Your name</label>
                                    <div className="text-help">
            							{name.touched ? name.error : ''}
        							 </div>
                                </div>
                                <div className={`md-form ${email.touched && email.invalid ? 'has-danger' : ''}`}>
                                    <i className="fa fa-envelope prefix"></i>
                                    <input type="text" id="form2" className="form-control" {...email} />
                                    <label htmlFor="form2">Your email</label>
                                    <div className="text-help">
            							{email.touched ? email.error : ''}
        							 </div>
                                </div>
                                <div className={`md-form ${message.touched && message.invalid ? 'has-danger' : ''}`}>
                                    <i className="fa fa-pencil prefix"></i>
                                    <textarea type="text" id="form8" className="md-textarea" {...message} value={message.value || '' }></textarea>
                                    <label htmlFor="form8">Your message</label>
                                    <div className="text-help">
            							{message.touched ? message.error : ''}
        							 </div>
                                </div>

                                <div className="text-xs-center">
                                    <button type="submit" className="btn btn-primary">Send</button>
                                    <hr />
                                    {this.renderSuccess()}
                                </div>
           	                   </form>
            			 </div>
             </div>
          </div>
        </div>
    </section>
    </div>
 	 	);
 	 }

}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Please enter your Name';
  }
  if (!values.email) {
    errors.email = 'Please enter your Phone Number';
  }
   if (!values.message) {
    errors.message = 'Please write some message';
  	}

  return errors;
}


function mapStateToProps(state) {
    return {message: state.message}
}


export default reduxForm({
  form: 'formContact',
  fields: ['name','email','message'],
  validate
}, mapStateToProps,{SubmitContactUs})(ContactUs);