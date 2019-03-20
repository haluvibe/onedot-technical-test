import React from "react";
import Wrapper from "../../layout/Wrapper/Wrapper";
import Title from "../../base/Title/Title";
import CreateDictionaryContainer from "../../../Containers/CreateDictionaryContainer";
import ListDictionariesContainer from "../../../Containers/ListDictionariesContainer";
import CreateTransformRowContainer from "../../../Containers/CreateTransformRowContainer";
import ListTransformRowsContainer from "../../../Containers/ListTransformRowsContainer";

const Main = ({ list, selected, transformRows }) => (
  <div data-cy="Main">
    <Wrapper>
      <Title>Create a new dictionary:</Title>
      <CreateDictionaryContainer />
      {list.length !== 0 && (
        <>
          <Title>Current Dictionaries:</Title>
          <ListDictionariesContainer />
        </>
      )}
      {selected && (
        <>
          <Title>Create a new transform row:</Title>
          <CreateTransformRowContainer />
          <Title>Transforms for selected dictionary:</Title>
          {transformRows.length > 0 ? (
            <ListTransformRowsContainer />
          ) : (
            <div>empty</div>
          )}
        </>
      )}
    </Wrapper>
  </div>
);

export default Main;
