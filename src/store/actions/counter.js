import * as actionTypes from "./actionTypes";

///// actions creator
export const increment = () => {
  return { type: actionTypes.INCREMENT };
};

export const decrement = () => {
  return { type: actionTypes.INCREMENT };
};

export const add = text => {
  return {
    type: actionTypes.ADD,
    val: text
  };
};

export const subtract = text => {
  return {
    type: actionTypes.SUBTRACT,
    val: text
  };
};
