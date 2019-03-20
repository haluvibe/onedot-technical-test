import React from "react";
import uuid from "uuid";
import Button from "../../base/Button/Button";

const ListDictionaries = ({
  list,
  selected,
  onRemoveDictionaryClick,
  onSelectDictionaryClick
}) => (
  <ul data-cy="ListDictionaries">
    {list.map(dictionary => (
      <li key={uuid.v4()} data-cy="Dictionary">
        <div>Name: {dictionary.name}</div>
        <div>Selected: {dictionary.id === selected ? "true" : "false"}</div>
        {dictionary.id !== selected && (
          <Button
            data-cy="DictionarySelectButton"
            onClick={() => onSelectDictionaryClick(dictionary.id)}
          >
            Select
          </Button>
        )}
        <Button
          data-cy="DictionaryRemoveButton"
          onClick={() => onRemoveDictionaryClick(dictionary.id)}
        >
          Remove
        </Button>
      </li>
    ))}
  </ul>
);

export default ListDictionaries;
