import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { TiWeatherPartlySunny } from 'react-icons/lib/ti';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import WeatherForecasting from './WeatherForecasting';

class AppLayout extends Component {
  constructor(props) {
    super(props);
  }

  round = (number, precision) => {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  };

  render() {
    return (
      <Container
        fluid
        id="appContainer"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Container>
          <Row>
            <Col>
              <div className="mt-3 mb-5 text-center">
                <div className="mb-3">
                  <TiWeatherPartlySunny
                    size={36}
                    color="white"
                    className="mr-2"
                  />
                  <div className="font-weight-bold text-light">
                    Let There Be Sunshine
                  </div>
                </div>
                <div>
                  <Link to="/" className="btn btn-primary">
                    Főoldal
                  </Link>
                  <Link to="/prediction" className="btn btn-primary ml-3">
                    5 napos előrejelzés
                  </Link>
                </div>
              </div>

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
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default AppLayout;
