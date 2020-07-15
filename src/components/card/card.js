import React from 'react';
import './card.styles.css';


class Card extends React.Component {
  render(){
    return (
      <div className ='card-container'>
      <img alt ='city' src = {`https://robohash.org/${this.props.city.id}`}/>
          <h1> {this.props.city.name} </h1>
          <p>{this.props.city.email}</p>
          <p>{this.props.city.address.city} </p>
      </div>
    )
  }
}

//
// export const Card = props =>(
//   <div className ='card-container'>
//       <h1> {props.city.address.city} </h1>
//   </div>
// );

export default Card
