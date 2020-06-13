import React from 'react'
import "./cell.css";

const Cell = props => (
    <div className="CellGroup">
        <div className="ContainerImg"><img src={props.image} /></div>
        <p>{props.title}</p>
    </div>
)

export default Cell;