import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import { FaGithub, FaLinkedin } from "react-icons/fa";









class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Joshua Macleod',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'}
      ],
      home: {
        title: "Hey, I'm Joshua",
        subTitle: 'Junior Developer',
        text: 'Check out my projects below',
        imgSrc: '/Users/joshua/Makers/Portfolio/src/assets/images/profile.png'
      },
      about: {
        title: 'About me'
      }
    }
  }
  
  render() {
    return (
          <Router>
            <Container className="p-0" fluid={true}>
              <Navbar className="border-bottom" bg="transparent" expand="lg" >
                <Navbar.Brand>Joshua Macleod</Navbar.Brand>
                <Navbar.Toggle  className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                  <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <a className="nav-link" href="https://github.com/Joshuamac2"><FaGithub/></a>
                    <a className="nav-link" href="https://www.linkedin.com/in/joshua-macleod-8805931a5/"><FaLinkedin/></a>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
              <Route path="/about" render={() => <AboutPage title={this.state.about.title}/>} />
              <Footer />
            </Container>
          </Router>
    );
  }
}

export default App;
