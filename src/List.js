import React from 'react';
import Card from './Card';

function List (props) {
    const { header, cardTitle, cardContent } = props;

    
    return (
    <section className="List">
        <header className="List-header">
          <h2>{header}</h2>
          <div className="List-cards">
            <Card cardTitle={cardTitle} cardContent={cardContent} />
          </div>
        </header>
    </section>
    );
}

export default List;