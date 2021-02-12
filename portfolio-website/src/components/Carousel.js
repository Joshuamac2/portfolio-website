import React from 'react';

import Card from '../components/Card'

import bird from '../assets/images/bird.png'
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