import React, { Component } from 'react';
import { CardTitle, CardSubtitle, CardText, Input } from 'reactstrap';
import { TiArrowSync } from 'react-icons/lib/ti';

import { connect } from 'react-redux';
import { getCurrentWeather } from './actions';
import CardLayout from '../CardLayout';
import '../AppLayout.css';

class Home extends Component {
  componentWillMount() {
    this.props.getCurrentWeather('budapest');
  }

  handleChange = e => {
    const place = e.target.value;
    this.props.getCurrentWeather(place);
  };

  render() {
    if (this.props.currentWeather) {
      const { round, currentWeather } = this.props;
      const { weather, main } = currentWeather;
      const { temp, humidity } = main;

      return (
        <CardLayout>
          <CardTitle className="text-center">
            Jelenlegi hőmérséklet és páratartalom
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
          <CardText className="text-center temp">
            <img
              src={`//openweathermap.org/img/w/${weather[0].icon}.png`}
              alt=""
            />
            <br />
            {round(temp, 1)}°C
          </CardText>
          <CardText className="text-center humidity mb-3">{humidity}%</CardText>
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

const mapStateToProps = ({ currentWeather }) => ({
  ...currentWeather,
});

const mapDispatchToProps = {
  getCurrentWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
