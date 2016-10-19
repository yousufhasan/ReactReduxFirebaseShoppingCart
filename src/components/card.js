import React,{ Component } from 'react';
import { Link } from 'react-router';
import { imagesLoaded } from '../utils/utils';
import Spinner from 'react-spinner';

export default class Card extends Component {

  constructor() {
            super();
            this.state = { loading: true };
        }

  handleImageChange() {
        const galleryElement = this.refs.gallery;
            this.setState({
             loading: !imagesLoaded(galleryElement),
        });
     }
  showReadMore() {
     if(this.props.readmore == undefined || this.props.readmore == true)
     {
      return (
      <div className="text-xs-center">
                <Link to={this.props.link} className="btn btn-primary">
                    Read more
               </Link>
      </div>
      )
     }

  }

  showRemove() {
     if(this.props.remove == true)
     {
      return <a onClick={this.props.removeClick} className="remove-cart" > Remove </a>;
     }

  }

  showStripe() {
     if( this.props.showstripe == true)
     {
        return (

        <div className="stripe dark"> <p> {this.props.heading} <i className="fa fa-chevron-right"></i></p>  </div>
        )
     }
  }

  renderImageClass() {
      if(this.props.showstripe == undefined || this.props.showstripe == false)
     {
        return 'img-fluid';
     }else{
        return 'img-fluid stripe-img';
     }
  }

  showCardBlock() {
    if(this.props.showstripe == undefined || this.props.showstripe == false)
     {
      return (

      <div className="card-block">
            <h4 className="card-center-Heading">{ this.props.heading }</h4> <hr />
             <p className="card-center-Heading" data-wow-delay="0.4s"> { this.props.description } </p>
                {this.showReadMore()}
                {this.showRemove()}
        </div>
        );
     }
  }

  render(){
    let loadingClass= this.state.loading ? '' : 'loading';
    let cardClass = this.props.showstripe ? 'card collection-card' : 'card';
    return(
      <div className={cardClass}>
      <div className={`spinnerHolder ${loadingClass}`}><Spinner /> </div>
            <div className="view overlay hm-zoom" ref="gallery">
           <Link to={this.props.link}> <img src={this.props.image} className={this.renderImageClass()} alt="" onLoad={this.handleImageChange.bind(this)} onError={this.handleImageChange.bind(this)}></img> </Link>
            { this.showStripe() }
           </div>
            { this.showCardBlock() }
    </div>
    )
  }
}


