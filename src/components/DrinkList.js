import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";



const DrinkList = props => {

  const DrinksListDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;

`;
  const DrinkCardDiv = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
    align-items: center;
    max-width: 100%;
    flex-direction: column;
    width:200px; 
    height: 300px;
    border: 1px solid;
    padding: 10px;
  
  
  `

  const DrinkImage = styled.img`
    width: 150px;
    height: 150px
    object-fit: scale;
    flex-shrink:3;    

  `
  return (
    <DrinksListDiv>
      {props.error ? (
        <div>{props.error}</div>
      ) : (
        props.drinks.map(drink => (
          <DrinkCardDiv key={drink.id}>
            <DrinkImage src= {drink.strDrinkThumb} alt= {drink.strDrink}/>
            <h3>{drink.strDrink}</h3>
          </DrinkCardDiv>
        ))
      )}



    </DrinksListDiv>
  );
};
const mapStateToProps = state => {

  return {
    drinks: state.drinks,
    error: state.error
  }

}

export default connect(mapStateToProps, {})(DrinkList);