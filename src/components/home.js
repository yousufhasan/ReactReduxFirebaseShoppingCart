import React,{ Component } from 'react';
import LandingImage from './landing_image'
import SectionHeader from './section_header';
import Services from '../containers/services';
import HowItWorks from '../components/how_it_works';
import AboutUs from '../components/about_us';
import ContactUs from '../containers/contact_form';

const Home = (props) => {
	return(
		<div>
		 <LandingImage />
		 <Services home={true} />
		 <HowItWorks home={true} />
		 <AboutUs home={true} />
		 <ContactUs home={true} />
		</div>

	);
}

export default Home;