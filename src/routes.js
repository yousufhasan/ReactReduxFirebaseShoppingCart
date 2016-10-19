import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home';
import HowItWorks from './components/how_it_works';
import AboutUs from './components/about_us';
import ContactUs from './containers/contact_form';
import Services from './containers/services';
import Categories from './containers/categories';
import Products from './containers/products';
import ProductDetail from './containers/product_detail';
import WishList from './containers/wish_list'
import SubmitWishList from './containers/submit_wishlist';

export default (
<Route path="/" component={App} onChange={() => { window.scrollTo(0, 0);   }} >
	<IndexRoute component={Home} />
	<Route path="/wishlist" component={WishList} />
	<Route path="/services" component={Services} />
	<Route path="/howitworks" component={HowItWorks} />
	<Route path="/aboutus" component={AboutUs} />
	<Route path="/contactus" component={ContactUs} />
	<Route path="/submit" component={SubmitWishList} />
	<Route path="services/:id" component={Categories} />
	<Route path="/services/:serviceID/categories/:categoryID/products" component={Products} />
	<Route path="/services/:serviceID/categories/:categoryID/products/:productID" component={ProductDetail} />
</Route>
);