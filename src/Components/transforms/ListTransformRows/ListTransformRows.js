import React from "react";
import uuid from "uuid";
import Button from "../../base/Button/Button";

const ListTransformRows = ({ transformRows, onRemoveTransformRowClick }) => (
  <ul data-cy="ListTransformRows">
    {transformRows.map(transformRow => (
      <li key={uuid.v4()}>
        <div>from: {transformRow.from}</div>
        <div>to: {transformRow.to}</div>
        <Button
          data-cy="RemoveTransformRowButton"
          onClick={() => onRemoveTransformRowClick(transformRow.id)}
        >
          Remove
        </Button>
      </li>
    ))}
  </ul>
);

export default ListTransformRows;
