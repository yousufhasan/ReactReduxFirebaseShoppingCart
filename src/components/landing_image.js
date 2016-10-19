import React,{ Component } from 'react';

const LandingImage = () => {
	return(
  <div className="view">
		<div className="landing_image hm-black-strong">
      <div className="full-bg-img">
          <div className="container">
              <div className="row" id="home">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="description wow zoomIn" data-wow-delay="1.0s">
                            <img className="landing_img" src="https://firebasestorage.googleapis.com/v0/b/sajao-f63ea.appspot.com/o/sale-min.png?alt=media&token=4db368a5-9ff0-42b2-95f6-fc6a8a9583bb" alt="" />
                       </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-6">
                        <div className="wow fadeInRight step_container" data-wow-delay="2.0s" >
                           <i className="step_shape fa fa-globe"></i>
                           <h3 className="step_heading">1. BROWSE</h3>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-6">
                         <div className="wow fadeInRight step_container" data-wow-delay="3.0s">
                           <i className="step_shape fa fa-hand-lizard-o"></i>
                           <h3 className="step_heading">2. SELECT</h3>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-6" >
                          <div className="wow fadeInRight step_container" data-wow-delay="4.0s">
                              <i className="step_shape fa fa-thumbs-o-up"></i>
                              <h3 className="step_heading">3. ENJOY</h3>
                         </div>
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-6">
                          <div className="wow fadeInRight step_container" data-wow-delay="5.0s">
                              <i className="step_shape fa fa-money"></i>
                              <h3 className="step_heading">4. PAY</h3>
                          </div>
                     </div>
              </div>
            </div>
          </div>
        </div>
    </div>

	);
}

export default LandingImage;