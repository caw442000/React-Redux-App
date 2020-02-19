import axios from "axios";

export const FETCH_DATA= "FETCH_DATA";
export const UPDATE_DRINKS = "UPDATE_DRINKS";
export const SET_ERROR = "SET_ERROR";




export const fetchData = () => dispatch => {
  dispatch({type: FETCH_DATA });
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
    .then(res => {
      console.log(res);
      dispatch({type: UPDATE_DRINKS, payload: res.data.drinks })
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({type: SET_ERROR, payload: "Error fetching data from api"})
    });
};