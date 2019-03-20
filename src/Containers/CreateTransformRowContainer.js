import { connect } from "react-redux";
import { addTransformRow } from "../store/transforms/actions";
import CreateTransformRow from "../Components/transforms/CreateTransformRow/CreateTransformRow";
import uuid from "uuid";

const getVisibleTransformRows = (rows, id) => {
  return rows.filter(row => row.dictionaryId === id);
};

const mapStateToProps = ({ transforms, dictionaries }) => ({
  rows: getVisibleTransformRows(transforms.rows, dictionaries.selected),
  selectedDictionaryId: dictionaries.selected
});

const mapDispatchToProps = dispatch => {
  return {
    onCreateTransformRowClick: (from, to, dictionaryId) => {
      if (!dictionaryId) return null;
      const id = uuid.v4();
      const payload = {
        from,
        to,
        id,
        dictionaryId
      };
      dispatch(addTransformRow(payload));
    }
  };
};

const CreateTransformRowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTransformRow);

export default CreateTransformRowContainer;
