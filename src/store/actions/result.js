import * as actionTypes from "./actionTypes";

export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

export const storeResult = text => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(saveResult(text));
    }, 2000);
  };
};
export const deleteResult = text => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: text
  };
};
