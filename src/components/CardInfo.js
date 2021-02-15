import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {


    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Github</a>
        </animated.div>
    );
    

}

export default CardInfo;