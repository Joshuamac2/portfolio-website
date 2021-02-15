import React from 'react';

import Card from '../components/Card'

import bird from '../assets/images/bird.png'
import whyleave from '../assets/images/whyleave.png'
import thermostat from '../assets/images/thermostat.png'
import workshop from '../assets/images/workshop.png'


import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

class Carousel extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                items: [
                    {
                        id: 0,
                        title: 'Chitter',
                        subTitle: 'A twitter clone',
                        imgSrc: bird,
                        link: 'https://github.com/Joshuamac2/Chitter',
                        selected: false
                    },
                    {
                        id: 1,
                        title: 'Why leave?',
                        subTitle: 'Interactive global map of refugee movements',
                        imgSrc: whyleave,
                        link: 'https://why-leave.vercel.app',
                        selected: false
                    },
                    {
                        id: 2,
                        title: 'Thermostat',
                        subTitle: 'An app where the user can interact with a thermostat',
                        imgSrc: thermostat,
                        link: 'https://github.com/Joshuamac2/Thermostat',
                        selected: false
                    },
                    {
                        id: 3,
                        title: 'Not complete',
                        subTitle: 'Have your say on recent trending news article',
                        imgSrc: workshop,
                        link: '',
                        selected: false
                    }
                ] 

            }
        }

        handleCardClick = (id, card) => {
            let items = [...this.state.items];

            items[id].selected = items[id].selected ? false : true
            
            items.forEach(item => {
                if(item.id !== id){
                    item.selected = false;
                }
            });

            this.setState( {
                items
            });
        }


        makeItems = (items)  => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })
        }


        render() {
            return(
                <Container fluid={true}>
                    
                    <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            )
        }

}

export default Carousel;