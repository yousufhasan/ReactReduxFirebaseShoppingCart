import React, { Component } from 'React';
import SectionHeader from '../components/section_header';
import Card from '../components/card';
import { getAllCategories } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from 'react-spinner';
import INNERMENUSEPERATOR from '../components/innermenu_seperator';

class Categories extends Component {
	componentWillMount() {
           this.props.getAllCategories(this.props.params.id);
		}
	showCategories () {
		 	 return this.props.message.categories.map((category)=> {
		 	 		return (
		 	 			<div className="col-md-4 card-margin wow zoomIn" data-wow-delay="0.2s" key={category.id}>
							<Card iconClass="fa fa-android fa-9x wow zoomIn" heading={category.name} description={category.description} showstripe={true} link={`/services/${this.props.params.id}/categories/${category.id}/products`} image={category.image} />
						</div>
						)
		 	 });
		 }
	render() {
		if(this.props.message.categories == null ){
            	return <div className="spinnerHolder"> <Spinner /> </div>
        }	
		return(
			 <section>
			 <INNERMENUSEPERATOR />
			 <div className="inner_page"> 				
				<div className="container">
					<SectionHeader heading="Categories" />
						{this.showCategories()}
				</div>

			 </div>
			 </section>
		);
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllCategories}, dispatch);
}

function mapStateToProps(state) {
	return {message: state.message}
}

export default connect(mapStateToProps,mapDispatchToProps)(Categories);
