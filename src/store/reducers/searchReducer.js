import { SEARCH_QUERY } from '../actions/types';

let initialState = {
  text: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_QUERY:
      return {
        ...state,
        text: payload
      };

    default:
      return state;
  }
};
