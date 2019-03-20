import { connect } from "react-redux";
import { removeTransformRow } from "../store/transforms/actions";
import ListTransformRows from "../Components/transforms/ListTransformRows/ListTransformRows";

const getVisibleTransformRows = (rows, id) => {
  return rows.filter(row => row.dictionaryId === id);
};

const mapStateToProps = ({ dictionaries, transforms }) => {
  return {
    transformRows: getVisibleTransformRows(
      transforms.rows,
      dictionaries.selected
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveTransformRowClick: id => {
      dispatch(removeTransformRow(id));
    }
  };
};

const ListTransformRowsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTransformRows);

export default ListTransformRowsContainer;
