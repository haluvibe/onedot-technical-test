import * as types from "./constants";

/*
 * action creators
 */

export const addDictionary = (id, name) => ({
  type: types.ADD_DICTIONARY,
  payload: {
    id,
    name
  }
});

export const removeDictionary = id => ({
  type: types.REMOVE_DICTIONARY,
  payload: id
});

export const selectDictionary = id => ({
  type: types.SELECT_DICTIONARY,
  payload: id
});
