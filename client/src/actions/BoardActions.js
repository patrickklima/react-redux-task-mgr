export const GET_BOARD_SUCCESS =  "GET_BOARD_SUCCESS";
export const GET_BOARD_FAILURE =  "GET_BOARD_FAILURE";
export const GET_BOARD_REQUEST =  "GET_BOARD_REQUEST";

export const UPDATE_BOARD_SUCCESS =  "UPDATE_BOARD_SUCCESS";
export const UPDATE_BOARD_FAILURE =  "UPDATE_BOARD_FAILURE";
export const UPDATE_BOARD_REQUEST =  "UPDATE_BOARD_REQUEST";

export const getBoardSuccess = (data) => {
  console.log("getBoardSuccess");
  return {
    type: GET_BOARD_SUCCESS,
    data: data
  };
}
export const getBoardFailure = (error) => {
  console.log("getBoardFailure");
  
  return {
    type: GET_BOARD_FAILURE,
    data: error
  };
}
export const getBoardRequest = () => {
  console.log("getBoardRequest");
  return {
    type: GET_BOARD_REQUEST,
  };
}
export const getBoard = (id) => {
  return (dispatch) => {
    dispatch(getBoardRequest())
    console.log("fetching: getBoard");
    fetch(`http://localhost:8080/boards/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log("getBoard received data", json);
      dispatch(getBoardSuccess(json[0]));
    })
    .catch(e => {
      console.log("dispatching getBoardFailure");
      
      dispatch(getBoardFailure(e))});
  }
}


export const updateBoardSuccess = (data) => {
  return {
    type: UPDATE_BOARD_SUCCESS,
    data: data
  };
}
export const updateBoardFailure = (error) => {
  return {
    type: UPDATE_BOARD_FAILURE,
    data: error
  };
}
export const updateBoardRequest = () => {
  return {
    type: UPDATE_BOARD_REQUEST,
  };
}
