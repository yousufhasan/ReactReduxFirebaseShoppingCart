import React,{ Component,PropTypes } from 'react';
import SectionHeader from '../components/section_header';
import { getAllCategories } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from 'react-spinner';
import INNERMENUSEPERATOR from '../components/innermenu_seperator';

class FilterCategories extends Component {
		static contextTypes = {
    		router: PropTypes.object
  		};
		constructor() {
			super();
			this.state = { active: 0 };
		}
	  componentWillMount() {
            this.props.getAllCategories(this.props.serviceID);
            this.setState({ active : this.props.categoryID });
		}

		componentWillReceiveProps(newProps) {
			this.setState({ active : newProps.categoryID });
		}
	
	  showCategories () {
	  		 return this.props.message.categories.map((category)=> {
	  		 	let className="";
	  		 		className=this.state.active==category.id?'active':'';
	  		 	return <a className={`list-group-item ${className}`} onClick={() => this.props.changeCategory(category.id)} key={category.id}>{category.name}</a>
	  		 });
	  	}

	  render() {
	  	if(this.props.message.categories == null ){
            	return <div className="spinnerHolder"> <Spinner /> </div>
        }	
	  	return(
	  		<div className="widget-wrapper">
                     <SectionHeader heading="Categories" />
                        <div className="list-group">
                           {this.showCategories()}
                        </div>
             </div>
	  	);
	  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllCategories}, dispatch);
}

function mapStateToProps(state) {
	return {message: state.message}
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterCategories);
