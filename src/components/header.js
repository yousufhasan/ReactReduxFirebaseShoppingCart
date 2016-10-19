import React,{ Component } from 'react';

export const Header = (props) => {
	return (
  	<div className="header">
        <p>
            <a id="menu" onClick= {showMenu} > <i className="fa fa-bars fa-3x" aria-hidden="true"></i> </a> 
            <a id="close" onClick= {hideMenu} ><i className="fa fa-close fa-3x" aria-hidden="true"></i> </a>
        </p>
        <h1> Zombie Dashboard </h1>
    </div>
	);
}

export const showMenu = (event) => {
	event.preventDefault();
 	$('.leftMenu').css('left', function(){ return $(this).offset().left; })
             .animate({"left":"0px"}, "fast" ,function(){
                 $('#close').css('display','block');
      });  
}

export const hideMenu = (event = null) => {
    if(event != null) {
	 event.preventDefault();
    }
            $('.leftMenu').css('left', function(){ return $(this).offset().left; })
             .animate({"left":"-500px"}, "fast",function(){
                $('#close').css('display','none');
     });  
}

