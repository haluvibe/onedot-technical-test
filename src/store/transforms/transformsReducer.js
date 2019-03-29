// dictionaries reducer

import {
  ADD_TRANSFORM_ROW,
  REMOVE_TRANSFORM_ROW,
  REMOVE_DICTIONARY
} from "./constants";

const INITIAL_STATE = {
  rows: []
};

const dictionariesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_TRANSFORM_ROW:
      // if an existing From exists, then replace that object entirely
      const existingFrom = state.rows.find(
        transform =>
          transform.from === payload.from &&
          transform.dictionaryId === payload.dictionaryId
      );
      if (existingFrom) {
        return {
          rows: [
            ...state.rows.filter(row => row.id !== existingFrom.id),
            payload
          ]
        };
      }
      // Otherwise, just add the payload to the array
      return {
        rows: [...state.rows, payload]
      };
    case REMOVE_TRANSFORM_ROW:
      return {
        rows: state.rows.filter(transformRow => transformRow.id !== payload)
      };
    case REMOVE_DICTIONARY:
      return {
        rows: state.rows.filter(
          transformRow => transformRow.dictionaryId !== payload
        )
      };
    default:
      return state;
  }
};

export default dictionariesReducer;
