import React, { Component } from 'react';
import SectionHeader from '../components/section_header';
import Card from '../components/card';
import { getAllProducts } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from 'react-spinner';
import INNERMENUSEPERATOR from '../components/innermenu_seperator';

class ProductsList extends Component {

	 	componentWillMount() {
	  		this.getCategoryProducts(this.props.categoryID);
		}

		componentWillReceiveProps(newProps) {
			if(this.props.categoryID != newProps.categoryID) {
				this.getCategoryProducts(newProps.categoryID);
			}
		}

		getCategoryProducts(categoryID) {
			this.props.getAllProducts( this.props.serviceID, categoryID);
		}
	  showProducts () {
	  		 return this.props.message.products.map((product)=> {
	  		 	return (
		 	 			<div className="col-md-4 card-margin wow zoomIn" key={product.id}>
							<Card iconClass="fa fa-android fa-9x wow zoomIn" heading={product.name} description={product.description} link={`/services/${this.props.serviceID}/categories/${this.props.categoryID}/products/${product.id}`} image={product.image} />
						</div>
						)
	  		 });
	  	}

	  render() {
	  	if(this.props.message.products == null ){
            	return <div className="spinnerHolder"> <Spinner /> </div>
        }	
	  	return(
	  		<section>		
			{this.showProducts()}
			 </section>
	  	);
	  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllProducts }, dispatch);
}

function mapStateToProps(state) {
	return {message: state.message}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsList);