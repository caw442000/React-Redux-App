import React from "react";
import { connect } from "react-redux";



const DrinkList = props => {
  return (
    <>
      {props.error ? (
        <div>{props.error}</div>
      ) : (
        props.drinks.map(drink => (
          <div key={drink.id}>
            <img src= {drink.strDrinkThumb} alt= {drink.strDrink}/>
            <h3>{drink.strDrink}</h3>
          </div>
        ))
      )}



    </>
  );
};
const mapStateToProps = state => {

  return {
    drinks: state.drinks,
    error: state.error
  }

}

export default connect(mapStateToProps, {})(DrinkList);