import React from 'react';

function Card (props) {
    const {cardTitle, cardContent} = props;
    
    return (
        <div className="Card">
            <button type="button">delete</button>
            <h3>{cardTitle}</h3>
            <p>{cardContent}</p>
        </div>
    );
}

export default Card;