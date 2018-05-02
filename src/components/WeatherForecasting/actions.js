import axios from '../../helpers/axios/axios.helper';

// GET_FORECASTED_WEATHER_PENDING
export const getForecastedWeatherPending = () => ({
  type: 'GET_FORECASTED_WEATHER_PENDING',
  payload: {},
});

// GET_FORECASTED_WEATHER_SUCCESS
export const getForecastedWeatherSuccess = forecastedWeather => ({
  type: 'GET_FORECASTED_WEATHER_SUCCESS',
  payload: forecastedWeather,
});

// GET_FORECASTED_WEATHER_FAIL
export const getForecastedWeatherFail = error => ({
  type: 'GET_FORECASTED_WEATHER_FAIL',
  payload: error,
});

// GET_FORECASTED_WEATHER
export const getForecastedWeather = place => async dispatch => {
  try {
    dispatch(getForecastedWeatherPending());
    const { data } = await axios.get('/forecast', {
      params: {
        q: place,
      },
    });
    dispatch(getForecastedWeatherSuccess(data));
  } catch (error) {
    dispatch(getForecastedWeatherFail(error));
  }
};
