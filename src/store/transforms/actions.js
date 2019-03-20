import * as types from "./constants";

/*
 * action creators
 */

export const addTransformRow = transformRow => ({
  type: types.ADD_TRANSFORM_ROW,
  payload: transformRow
});

export const removeTransformRow = id => ({
  type: types.REMOVE_TRANSFORM_ROW,
  payload: id
});
