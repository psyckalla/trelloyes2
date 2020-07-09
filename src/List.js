import React from 'react';
import Card from './Card';

function List (props) {
    const { header, listCards, } = props;
    

    const individualCards = listCards.map((list) => {
      return list.map(card => {
       return <Card cardTitle={card.title} cardContent={card.content} />;
      });
    });

    console.log(individualCards);
    
    return (
    <section className="List">
        <header className="List-header">
          <h2>{header}</h2>
          <div className="List-cards">
            {individualCards}
          </div>
        </header>
    </section>
    );
}

export default List;