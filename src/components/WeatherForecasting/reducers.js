export default function(state = {}, { type = '', payload = {} }) {
  switch (type) {
    // GET FORECASTED WEATHER

    case 'GET_FORECASTED_WEATHER_PENDING': {
      return {
        ...state,
      };
    }

    case 'GET_FORECASTED_WEATHER_SUCCESS': {
      return {
        ...state,
        forecastedWeather: payload,
      };
    }

    case 'GET_FORECASTED_WEATHER_FAIL': {
      return {
        ...state,
        forecastedWeather: null,
      };
    }

    default:
      return state;
  }
}
