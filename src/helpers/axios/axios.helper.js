import axios from 'axios';
import * as helper from './api.helper';

// set axios query helper
export default axios.create({
  baseURL: helper.openWeatherMapUrl,
  timeout: helper.asyncTimeout,
  params: {
    APPID: helper.openWeatherMapApiKey,
    lang: 'hu_HU',
    units: 'metric',
  },
});
