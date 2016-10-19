import React,{ Component } from 'react';
import SectionHeader from './section_header'
import INNERMENUSEPERATOR from './innermenu_seperator';

const HowItWorks = (props) => {
  const showSeperator  = () => {
    if(props.home != true) {
      return <INNERMENUSEPERATOR />
      }
  }

  const selectDelay = (delay) => {
     if(props.home != true) {
        return '';
      }
      return delay;
  }

  const stepShape = (shapeClass) => {
    if(props.home != true) {
        return 'step_shape step_shape_inner '+shapeClass;
      }
      return 'step_shape '+shapeClass;
  }

  const renderClass = () => {
         if(props.home != true) {
        return 'section_howitworks inner_page section_howitworks_inner';
      }
      return 'section_howitworks';
  }

	return(
  <div>
  {showSeperator()}
  <section className={renderClass()}>
  <SectionHeader heading="How It Works" headerClass="header_blue" />
  <div className="container">
  <dl className="step_dl row">
  <dd className="step_dd wow fadeInRight col-md-3" data-wow-delay={selectDelay("0.2s")}>
                  <i className={stepShape("fa fa-globe")}></i>
                  <h3 className="step_heading"><span>BROWSE</span></h3>
                  <h4 className="step_subdesc_heading"> Step 1</h4>
                  <p className="step_description">With adaptive skill measurement, in as little as five minutes
                   you'll know exactly where to start learning, so you never waste
                   time on material you've already mastered.
                  </p>
    </dd>
  <dd className="step_dd wow fadeInRight col-md-3" data-wow-delay={selectDelay("1s")}>
                  <i className={stepShape("fa fa-hand-lizard-o")}></i>
                  <h3 className="step_heading"><span> SELECT</span></h3>
                  <h4 className="step_subdesc_heading"> Step 2</h4>
                  <p className="step_description">With adaptive skill measurement, in as little as five minutes
                   you'll know exactly where to start learning, so you never waste
                   time on material you've already mastered.
                  </p>
    </dd>
  <dd className="step_dd wow fadeInRight col-md-3" data-wow-delay={selectDelay("1.8s")}>
                  <i className={stepShape("fa fa-thumbs-o-up")}></i>
                  <h3 className="step_heading"><span>ENJOY</span></h3>
                  <h4 className="step_subdesc_heading"> Step 3</h4>
                  <p className="step_description">With adaptive skill measurement, in as little as five minutes
                   you'll know exactly where to start learning, so you never waste
                   time on material you've already mastered.
                  </p>
    </dd>
    <dd className="step_dd wow fadeInRight col-md-3" data-wow-delay={selectDelay("2.6s")}>
                  <i className={stepShape("fa fa-money")} ></i>
                  <h3 className="step_heading"><span>PAY</span></h3>
                  <h4 className="step_subdesc_heading"> Step 4</h4>
                  <p className="step_description">With adaptive skill measurement, in as little as five minutes
                   you'll know exactly where to start learning, so you never waste
                   time on material you've already mastered.
                  </p>
    </dd>
   </dl>
   </div>
  </section>
  </div>
	);
}

export default HowItWorks;