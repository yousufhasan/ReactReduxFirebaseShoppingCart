import React,{ Component } from 'react';
import SectionHeader from './section_header'
import INNERMENUSEPERATOR from './innermenu_seperator';


const AboutUs = (props) => {
	const showSeperator  = () => {
    if(props.home != true) {
      return <INNERMENUSEPERATOR />
      }
  }
  const renderClass = () => {
      if(props.home != true) {
        return 'about_us inner_page about_inner';
      }else {
        return 'about_us';
      }
    }

  const headerClass = () => {
       if(props.home != true) {
        return 'header_black';
      }else {
        return 'header_white';
      }
  }

  const selectDelay = (delay) => {
     if(props.home != true) {
        return '';
      }
      return delay;
  }
	return(
		<div>
		{showSeperator()}
		<section className={renderClass()}>
		<SectionHeader heading="About Us" headerClass={headerClass()}/>
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-lg-4">
              		<div className="big-intro wow fadeInLeft" data-wow-delay={selectDelay("0.3s")}>Everything you see here is responsive and mobile-friendly.</div>
            	</div>
            	<div className="col-md-8 col-lg-8">
              		<p className="about_description wow fadeInRight" data-wow-delay={selectDelay("0.3s")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec massa enim. Aliquam viverra at est ullamcorper sollicitudin. Proin a leo sit amet nunc malesuada imperdiet pharetra ut eros. <br /><br />Pellentesque scelerisque nibh ac risus facilisis volutpat ac vitae urna. Aenean eleifend ut libero eget adipiscing. Aliquam tincidunt, est eget cursus feugiat, risus arcu adipiscing massa, ullamcorper facilisis erat est eu metus. <br /><br />Mauris vel nunc at ipsum fermentum pellentesque quis ut massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas non adipiscing massa. Sed ut fringilla sapien. Cras sollicitudin, lectus sed tincidunt cursus, magna lectus vehicula augue, a lobortis dui orci et est.<br />
              		Mauris vel nunc at ipsum fermentum pellentesque quis ut massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas non adipiscing massa. Sed ut fringilla sapien. Cras sollicitudin, lectus sed tincidunt cursus, magna lectus vehicula augue, a lobortis dui orci et est.Mauris vel nunc at ipsum fermentum pellentesque quis ut massa. </p>
            	</div>
			</div>
		</div>
		</section>
		</div>
		);
}

export default AboutUs;