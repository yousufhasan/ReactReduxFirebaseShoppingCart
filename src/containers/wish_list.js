import React,{ Component } from 'react';
import SectionHeader from '../components/section_header';
import INNERMENUSEPERATOR from '../components/innermenu_seperator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from 'react-spinner';
import Card from '../components/card';
import { getWishList,removeFromWishList } from '../actions';
 import { Link } from 'react-router';

class WishList extends Component {
	componentWillMount() {
		this.props.getWishList();
	}

	removeFromWishList(product,event) {
		event.preventDefault();
		this.props.removeFromWishList(product);
	}

	showWishList () {
		if (this.props.message.wishlist.length == 0 ) {
			return <div className="noitem-message animated fadeInDown"> No Item left in the list.</div>
		}
		 	 return this.props.message.wishlist.map((product)=> {
		 	 		return (

		 	 			<div className="col-md-4 card-margin wow zoomIn" data-wow-delay="0.4s" key={product.uid}>
							<Card iconClass="fa fa-android fa-9x wow zoomIn" heading={product.name} readmore={false} remove={true} removeClick={()=>{this.removeFromWishList(product,event)}} link={product.url} image={product.image} />
						</div>

						)
		 	 });
		 }
	render() {
		if(this.props.message.wishlist == null ){
            	return <div className="spinnerHolder"> <Spinner /> </div>
        }
		return(
			 <section>
			 <INNERMENUSEPERATOR />
			 <div className="inner_page">
				<div className="container">
					<SectionHeader heading="Wish List" />
					<div className="col-md-12">
						{this.showWishList()}
					</div>
					      <div className="wow fadeIn" data-wow-delay="0.5s">
                                <Link to="/submit" className="home-btn btn-AddWishList"><strong>Submit</strong>  </Link>
                           </div>
				</div>

			 </div>
			 </section>
		);
	}

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getWishList,removeFromWishList }, dispatch);
}

function mapStateToProps(state) {
    return {message: state.message}
}

export default connect(mapStateToProps,mapDispatchToProps)(WishList);

