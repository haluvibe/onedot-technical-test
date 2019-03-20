import { combineReducers } from "redux";
import dictionariesReducer from "./dictionaries/dictionariesReducer";
import transformsReducer from "./transforms/transformsReducer";

const rootReducer = combineReducers({
  dictionaries: dictionariesReducer,
  transforms: transformsReducer
});

export default rootReducer;
