import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Fade,
  Container,
  Row,
  Col,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import { TiWeatherPartlySunny } from 'react-icons/lib/ti';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import WeatherForecasting from './WeatherForecasting';

class AppLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      fadeIn: true,
    };
  }

  navbarToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  fadeToggle = () => {
    this.setState({
      fadeIn: !this.state.fadeIn,
    });
  };

  round = (number, precision) => {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  };

  render() {
    return (
      <Container fluid id="appContainer">
        <Container>
          <Row>
            <Col>
              <Navbar light expand="md" className="w-100 mb-5">
                <NavbarBrand href="/">
                  <TiWeatherPartlySunny size={36} color="white" />
                </NavbarBrand>
                <NavbarToggler
                  className="border-0"
                  onClick={this.navbarToggle}
                />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem
                      onClick={this.fadeToggle}
                      className="mr-md-2 mb-2 mb-md-0 text-center nav-buttons font-weight-bold"
                    >
                      <NavLink href="/">Főoldal</NavLink>
                    </NavItem>
                    <NavItem
                      onClick={this.fadeToggle}
                      className="text-center nav-buttons font-weight-bold"
                    >
                      <NavLink href="/prediction">5 napos előrejelzés</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>

              <Fade in={this.state.fadeIn}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Home round={this.round} />}
                  />
                  <Route
                    path="/prediction"
                    render={() => <WeatherForecasting round={this.round} />}
                  />
                </Switch>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default AppLayout;
