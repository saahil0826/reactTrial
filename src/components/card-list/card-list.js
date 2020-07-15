import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.js';


class CardList extends React.Component {
  render(){
    return (
      <div className ='card-list'>
      { this.props.cities.map(city => (
          <Card key={city.id} city={city} />
        ))}
</div>
    )
  }
}


export default CardList
