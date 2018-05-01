export default function(state = {}, { type = '', payload = {} }) {
  switch (type) {
    // GET CURRENT WEATHER

    case 'GET_CURRENT_WEATHER_PENDING': {
      return {
        ...state,
      };
    }

    case 'GET_CURRENT_WEATHER_SUCCESS': {
      return {
        ...state,
        currentWeather: payload,
      };
    }

    case 'GET_CURRENT_WEATHER_FAIL': {
      return {
        ...state,
        currentWeather: null,
      };
    }

    default:
      return state;
  }
}
