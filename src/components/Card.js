import React from 'react';

import CardInfo from '../components/CardInfo';

function Card(props) {

    return(
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}> 
            <p className="g-card-title">{props.item.title}</p>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );
}

export default Card;