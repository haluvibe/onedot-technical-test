import React, { useState } from "react";
import Button from "../../base/Button/Button";
import Input from "../../base/Input/Input";

const CreateTransformRow = ({
  rows,
  selectedDictionaryId,
  onCreateTransformRowClick
}) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const isExistingTo = !!rows.find(row => row.to === from);
  const isFromAndToIdentical = from === to && from && to;

  const handleSubmit = event => {
    event.preventDefault();
    if (!isExistingTo & !isFromAndToIdentical) {
      onCreateTransformRowClick(from, to, selectedDictionaryId);
      setFrom("");
      setTo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} data-cy="CreateTransformRow">
      <Input
        data-cy="FromInput"
        value={from}
        onChange={e => setFrom(e.target.value)}
        placeholder="From"
        type="text"
        name="from"
        required
      />
      <Input
        data-cy="ToInput"
        value={to}
        onChange={e => setTo(e.target.value)}
        placeholder="To"
        type="text"
        name="to"
        required
      />
      {isExistingTo || isFromAndToIdentical ? (
        <div data-cy="CreateTransformRowError">
          This transform row from and to pair is invalid
        </div>
      ) : (
        <Button data-cy="CreateTransformRowSubmitButton">
          Create Transform Row
        </Button>
      )}
    </form>
  );
};
export default CreateTransformRow;
