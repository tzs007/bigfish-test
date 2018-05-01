import { combineReducers } from 'redux';
import currentWeather from '../components/Home/reducers';
import forecastedWeather from '../components/WeatherForecasting/reducers';

const rootReducer = combineReducers({
  currentWeather,
  forecastedWeather,
});

export default rootReducer;
