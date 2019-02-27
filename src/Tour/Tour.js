import  "./Tour.scss";

import React, { Component } from 'react';

class Tour extends Component {
    state = { 
      showInfo: false
     }
     handleInfo = () => {
       this.setState(
         {
           showInfo: !this.state.showInfo
         });
     };
    render() { 
      const{ id, city,img,name,info} = this.props.tour;
      const{ rTour } = this.props;
        return ( <article className="tour">
        
      <div className="img-container">
      
    
      <img src={img}  alt=""/>
      <span onClick=
       {()=>{rTour(id);}} className="close-btn" >
      
      <i className="fas fa-window-close"/>
      
      </span>
      <div className="tour-info">
      <h3> {city}</h3>
      <h4> {name}</h4>
      <h5> 
      info { " "}

      <span onClick= { this.handleInfo}>
      <i className="fas fa-caret-square-down"/>
      </span>
      </h5>
      {this.state.showInfo && <p> {info}
      </p> }
      <p> 
      
    
      </p>
      </div>
      
      
      </div>
        
        
        </article> );
    }
}
 
export default Tour;