import { connect } from "react-redux";
import Main from "../Components/views/Main/Main";

const getVisibleTransformRows = (rows, id) => {
  return rows.filter(row => row.dictionaryId === id);
};

const mapStateToProps = ({ dictionaries, transforms }) => ({
  list: dictionaries.list,
  selected: dictionaries.selected,
  transformRows: getVisibleTransformRows(transforms.rows, dictionaries.selected)
});

const MainContainer = connect(
  mapStateToProps,
  {}
)(Main);

export default MainContainer;
