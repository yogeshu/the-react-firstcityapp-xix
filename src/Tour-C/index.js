import "./Tour-C.scss"

import React, { Component } from 'react';

import Tour from "../Tour/Tour";
import tourData from '../tourData';

class TourC extends Component {
    state = { 
        tours: tourData
     }
   
   
   rTour = id => {
       const { tours } = this.state;
       const sortedTours = tours.filter(tour => tour.id !==id);
       this.setState({
           tours:sortedTours
       });
   };
     render() { 
     const { tours  }   = this.state;
        return (
            <section className="tourlist"> 
            
            {tours.map(tour  => { 
                return <Tour key= {tour.id} tour={tour} rTour= {this.rTour}/>;
                
                })}
            
            </section>
          );
    }
}
 
export default TourC;