const PlacesReducer = (state = [], action) => {
  switch(action.type){
    case 'UPDATE_QUERY': // show loading icon
      return state;
    case 'RECEIVE_QUERY_DATA': // show new data
      return action.data;
    default:
      return state;
  }
};

export default PlacesReducer;

// State Shape:
