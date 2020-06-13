import React from 'react'
import "./reset.css"
import "./card.css"

const Card = props => (
    <div className="Card">
        <div className="CardOverlay">
            <img src={props.image} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <span>{props.side}</span>
        </div>
    </div>
)

export default Card;

