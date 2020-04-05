import { SEARCH_QUERY } from "./types";

export const searchAction = string => async dispatch => {

  console.log(string)
  const searchText = string;

  return dispatch({
    type: SEARCH_QUERY,
    payload: searchText
  });
};
