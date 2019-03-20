import { connect } from "react-redux";
import { addDictionary, selectDictionary } from "../store/dictionaries/actions";
import CreateDictionary from "../Components/dictionary/CreateDictionary/CreateDictionary";
import uuid from "uuid";

const mapStateToProps = ({ dictionaries }) => ({
  list: dictionaries.list
});

const mapDispatchToProps = dispatch => {
  return {
    onCreateDictionaryClick: name => {
      const id = uuid.v4();
      dispatch(addDictionary(id, name));
      dispatch(selectDictionary(id));
    }
  };
};

const CreateDictionaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDictionary);

export default CreateDictionaryContainer;
