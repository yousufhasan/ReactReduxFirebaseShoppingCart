import React,{ Component } from 'react';
import SectionHeader from '../components/section_header';
import INNERMENUSEPERATOR from '../components/innermenu_seperator';
import { getProductDetails,addToWishList } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from 'react-spinner';
import FilterCategories from './filter_categories';
import { browserHistory } from 'react-router';
import { imagesLoaded } from '../utils/utils';
class ProductDetail extends Component {

      constructor() {
            super();
            this.state = { categoryID: 0 , loading: true };
        }

      componentWillMount() {
            this.props.getProductDetails(this.props.params.serviceID, this.props.params.categoryID,this.props.params.productID);
        }

      setActiveCategory(catID) {
        browserHistory.push(`/services/${this.props.params.serviceID}/categories/${catID}/products`);
     }
      addToWishList() {
        let obj = this.props.message.productDetail;
            obj.url = `/services/${this.props.params.serviceID}/categories/${this.props.params.categoryID}/products/${this.props.params.productID}`;
            this.props.addToWishList(obj);
             browserHistory.push(`/wishlist`);

      }

     handleImageChange() {
        const galleryElement = this.refs.gallery;
            this.setState({
             loading: !imagesLoaded(galleryElement),
        });
     }

      render() {
        let loadingClass= !this.state.loading ? 'loading' : '';
        if(this.props.message.productDetail == null){
                return <div className="spinnerHolder"><Spinner /> </div>
        }
                return(
        <section>
        <div className={`spinnerHolder ${loadingClass}`}><Spinner /> </div>
        <INNERMENUSEPERATOR />
        <div className="inner_page">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                             <FilterCategories serviceID={this.props.params.serviceID} changeCategory={this.setActiveCategory.bind(this)}  categoryID={this.props.params.categoryID} />
                </div>
                <div className="col-md-8">
                    <div className="product-wrapper" ref="gallery">
                        <div className="view overlay hm-white-light z-depth-1-half">
                                    <img src={this.props.message.productDetail.image} className="img-fluid wow zoomIn" alt="" onLoad={this.handleImageChange.bind(this)} onError={this.handleImageChange.bind(this)}></img>
                                    <div className="mask">
                                    </div>
                                    <h3 className="price"><span className="label rgba-blue-strong">{this.props.message.productDetail.price} $</span></h3>
                        </div>
                        <h2 className="h2-responsive product-height-h2">{this.props.message.productDetail.name}</h2>
                                <hr />
                               <div dangerouslySetInnerHTML={{__html: this.props.message.productDetail.longdescription}}></div>

                               <div className="wow zoomIn">
                                <a className="home-btn btn-AddWishList" onClick={this.addToWishList.bind(this)}><strong>Add</strong>  </a>
                                </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
        </section>
        );
      }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProductDetails,addToWishList }, dispatch);
}

function mapStateToProps(state) {
    return {message: state.message}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);

