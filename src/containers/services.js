import React, { Component } from 'React';
import SectionHeader from '../components/section_header';
import Card from '../components/card'
import { getAllServices } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from 'react-spinner';
import INNERMENUSEPERATOR from '../components/innermenu_seperator';

class Services extends Component {
		 componentWillMount() {
		 	this.props.getAllServices();
		 }
		 showServices () {
		 	 return this.props.message.services.map((service)=> {
		 	 		let animationClass = service.id==1?"col-md-6 wow fadeInLeft":"col-md-6 wow fadeInRight";
		 	 		return (<div className={animationClass} key={service.id} data-wow-delay={this.selectDelay("0.3s")}>
							<Card iconClass="fa fa-android fa-9x wow zoomIn" heading={service.name} description={service.description} link={`services/${service.id}`} image={service.image} />
						</div>)
		 	 });
		 }
		 selectDelay(delay) {
		     if(this.props.home != true) {
		        return '';
		      }
		      return delay;
   		}
		showSeperator () {
			if(this.props.home != true) {
			return <INNERMENUSEPERATOR />
			}
		}
		renderClass() {
			if(this.props.home != true) {
				return 'container inner_page';
			}else {
				return 'container';
			}
		}
		render(){
			 if(this.props.message.services == null ){
            	return <div className="spinnerHolder"> <Spinner /> </div>
        		}
				return (
					<div>
					{this.showSeperator()}
					<section className={this.renderClass()}>
						<SectionHeader heading="Services" />
						{this.showServices()}
					</section>
					</div>
				);
	}
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllServices }, dispatch);
}

function mapStateToProps(state) {
	return {message: state.message}
}

export default connect(mapStateToProps,mapDispatchToProps)(Services);
