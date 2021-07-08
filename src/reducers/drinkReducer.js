import { FETCH_DATA, UPDATE_DRINKS, SET_ERROR } from "../actions";

const initialState = {
  drinks: [],
  isFetchingData: false,
  error: ""
};


export const drinkReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true, 
        drinks: []
      };
    case UPDATE_DRINKS:
      return {
        ...state, 
        drinks: action.payload,
        isFetchingData:false
      };
    case SET_ERROR:
      return{
        ...state, 
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }  
};
