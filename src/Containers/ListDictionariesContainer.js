import { connect } from "react-redux";
import {
  selectDictionary,
  removeDictionary
} from "../store/dictionaries/actions";

import ListDictionaries from "../Components/dictionary/ListDictionaries/ListDictionaries";

const mapStateToProps = ({ dictionaries }) => ({
  list: dictionaries.list,
  selected: dictionaries.selected
});

const mapDispatchToProps = dispatch => {
  return {
    onSelectDictionaryClick: id => {
      dispatch(selectDictionary(id));
    },
    onRemoveDictionaryClick: id => {
      dispatch(removeDictionary(id));
    }
  };
};

const DictionaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDictionaries);

export default DictionaryContainer;
