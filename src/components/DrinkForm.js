import React from "react";
import { connect } from 'react-redux';

import { fetchData } from "../actions";



const DrinkForm = props => {
  
  const handleFetchData = e => {
    e.preventDefault();
    props.fetchData();
  }
  return (
    <>  
      {props.isFetchingData ? (
        <div>We are fetching Data</div>
      ) : (
        <button onClick={handleFetchData}>Fetch Drinks</button>
      )}

    </>
  );
};

const mapStateToProps = state => {
  return{
    isFetchingData: state.isFetchingData

  };
};

export default connect(mapStateToProps, { fetchData })(DrinkForm);