import React, { Component } from 'react';

const SectionHeader = (props) => {
	let dividerClass= props.headerClass ? `divider-new ${props.headerClass}` : "divider-new";
	return (
		<div className="container">
			<div className={dividerClass}>
                  <h2 className="h2-responsive wow fadeInDown">{ props.heading }</h2>
            </div>
        </div>
	);
}

export default SectionHeader;