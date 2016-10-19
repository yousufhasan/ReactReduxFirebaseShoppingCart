import React, { Component } from 'React';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getWishList} from '../actions';
import { Link } from 'react-router';

class CartCounter extends Component {
	componentWillMount() {
		this.props.getWishList();
	}
	render() {
		let counter = this.props.message.wishlist ? this.props.message.wishlist.length : 0;
		return (
			<Link to='/wishlist'><i className="fa fa-shopping-cart spCart"></i> <span className="spCartCounter">{counter}</span></Link>
		);
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getWishList }, dispatch);
}

function mapStateToProps(state) {
	return {message: state.message}
}

export default connect(mapStateToProps,mapDispatchToProps)(CartCounter);