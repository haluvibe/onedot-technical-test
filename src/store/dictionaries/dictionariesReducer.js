// dictionaries reducer

import {
  ADD_DICTIONARY,
  REMOVE_DICTIONARY,
  SELECT_DICTIONARY
} from "./constants";

const INITIAL_STATE = {
  list: [],
  selected: null
};

const dictionariesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_DICTIONARY:
      return {
        ...state,
        list: [...state.list, payload]
      };
    case REMOVE_DICTIONARY:
      return {
        list: state.list.filter(dictionary => dictionary.id !== payload),
        selected: state.selected === payload ? null : state.selected
      };
    case SELECT_DICTIONARY:
      return {
        ...state,
        selected: payload
      };
    default:
      return state;
  }
};

export default dictionariesReducer;
