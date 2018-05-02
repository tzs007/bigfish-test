import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  CardTitle,
  CardSubtitle,
  CardText,
  Input,
} from 'reactstrap';
import { getForecastedWeather } from './actions';
import _ from 'lodash';
import { TiArrowSync } from 'react-icons/lib/ti';
import moment from 'moment';
import 'moment/locale/hu';

import CardLayout from '../CardLayout';
import '../AppLayout.css';

moment.locale('hu');

class WeatherForecasting extends Component {
  componentDidMount() {
    this.props.getForecastedWeather('budapest');
  }

  handleChange = e => {
    const place = e.target.value;
    this.props.getForecastedWeather(place);
  };

  render() {
    if (this.props.forecastedWeather) {
      const { round, forecastedWeather } = this.props;
      const { list } = forecastedWeather;

      return (
        <CardLayout>
          <CardTitle className="text-center">
            Öt napos hőmérséklet és páratartalom előrejelzés
          </CardTitle>
          <CardSubtitle className="text-center">
            <Input
              className="mt-3"
              type="select"
              name="cities"
              id="cities"
              onChange={e => this.handleChange(e)}
            >
              <option value="budapest,hu">Budapest</option>
              <option value="berlin,de">Berlin</option>
              <option value="london,uk">London</option>
              <option value="tokyo,jp">Tokió</option>
              <option value="madrid,es">Madrid</option>
            </Input>
            <hr />
          </CardSubtitle>
          <Container>
            <Row>
              {_.map(list, (item, id) => {
                return id % 8 === 0 ? (
                  <Col
                    sm
                    key={id}
                    className="text-center border-bottom pb-3 mb-3"
                  >
                    <CardText>{moment(item.dt_txt).format('dddd')}</CardText>
                    <img
                      src={`//openweathermap.org/img/w/${
                        item.weather[0].icon
                      }.png`}
                      alt=""
                    />
                    <CardText className="font-weight-bold">
                      {round(item.main.temp, 1)}°C
                    </CardText>
                    <CardText>
                      <small>{item.main.humidity}%</small>
                    </CardText>
                  </Col>
                ) : null;
              })}
            </Row>
          </Container>
        </CardLayout>
      );
    }
    return (
      <CardLayout>
        <div>
          <TiArrowSync size={36} /> Loading
        </div>
      </CardLayout>
    );
  }
}

const mapStateToProps = ({ forecastedWeather }) => ({
  ...forecastedWeather,
});

const mapDispatchToProps = {
  getForecastedWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecasting);
