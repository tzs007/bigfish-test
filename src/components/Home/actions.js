import axios from '../../helpers/axios/axios.helper';

// GET_CURRENT_WEATHER_PENDING
export const getCurrentWeatherPending = () => ({
  type: 'GET_CURRENT_WEATHER_PENDING',
  payload: {},
});

// GET_CURRENT_WEATHER_SUCCESS
export const getCurrentWeatherSuccess = currentWeather => ({
  type: 'GET_CURRENT_WEATHER_SUCCESS',
  payload: currentWeather,
});

// GET_CURRENT_WEATHER_FAIL
export const getCurrentWeatherFail = error => ({
  type: 'GET_CURRENT_WEATHER_FAIL',
  payload: error,
});

// GET_CURRENT_WEATHER
export const getCurrentWeather = place => async dispatch => {
  try {
    dispatch(getCurrentWeatherPending());
    const currentWeather = await axios.get('/weather', {
      params: {
        q: place,
      },
    });
    dispatch(getCurrentWeatherSuccess(currentWeather.data));
  } catch (error) {
    dispatch(getCurrentWeatherFail(error));
  }
};
