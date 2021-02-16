import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import profile from '../assets/images/profile.png';


function Hero(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-6">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={5}>
                        { props.title && <h1 className="display-3 Century Gothic font-weight: bold">{props.title}</h1> } 
                        { props.subTitle && <h3 style={{ color: '#5F9EA0' }} className="display-4 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                    </Col>
                    { <img src={profile} className="profile-pic" alt="profile-pic" /> }
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero; 