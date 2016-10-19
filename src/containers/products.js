import React, { Component } from 'React';
import SectionHeader from '../components/section_header';
import Card from '../components/card';
import { getAllCategories } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FireBaseTools from '../utils/firebase';
import Spinner from 'react-spinner';
import INNERMENUSEPERATOR from '../components/innermenu_seperator';
import FilterCategories from './filter_categories';
import ProductsList from './products_list';
import { browserHistory } from 'react-router';
class Products extends Component {

	constructor() {
			super();
			this.state = { categoryID: 0 };
		}
	 componentWillMount() {
	   this.setState({ categoryID : this.props.params.categoryID });
		}

	setActiveCategory(catID) {
		browserHistory.push(`/services/${this.props.params.serviceID}/categories/${catID}/products`);
	   	this.setState({ categoryID : catID });
	 }
	render() {
		return(
			 <section className="products_section">
			<INNERMENUSEPERATOR />
			 <div className="inner_page"> 	
			 	 <div className="col-md-3">
			 	 	 <FilterCategories serviceID={this.props.params.serviceID} changeCategory={this.setActiveCategory.bind(this)} categoryID={this.state.categoryID} />
		
			 	 </div>
			 	 <div className="col-md-9">
			 	 <SectionHeader heading="Products" />
			 	  <ProductsList serviceID={this.props.params.serviceID} categoryID={this.state.categoryID} />
			 	  </div>
			 </div>

			 </section>
		);
	}
}


function mapStateToProps(state) {
	return {message: state.message}
}

export default connect(mapStateToProps,null)(Products);