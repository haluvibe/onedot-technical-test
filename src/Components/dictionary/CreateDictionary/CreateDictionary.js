import React, { useState } from "react";
import Button from "../../base/Button/Button";
import Input from "../../base/Input/Input";

const CreateDictionary = ({ list, onCreateDictionaryClick }) => {
  const [name, setName] = useState("");

  const isExistingName = !!list.find(dictionary => dictionary.name === name);

  const handleSubmit = event => {
    event.preventDefault();
    if (!isExistingName) {
      onCreateDictionaryClick(name);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} data-cy="CreateDictionary">
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name of dictionary"
        type="text"
        name="name"
        data-cy="NameInput"
        required
      />
      {isExistingName ? (
        <div>A dictionary with that name already exists</div>
      ) : (
        <Button data-cy="CreateDictionarySubmitButton">
          Create Dictionary
        </Button>
      )}
    </form>
  );
};
export default CreateDictionary;
