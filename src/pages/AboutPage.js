import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello friendly people</p>
                <p>Hello friendly people</p>
                <p>Hello friendly people</p>
                <p>Hello friendly people</p>
            </Content>
        </div>
    );
}

export default AboutPage;