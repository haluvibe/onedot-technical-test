import * as constants from "./constants";
import * as actions from "./actions";
import expect from "expect";

const mockId = "00000000-0000-0000-0000-000000000000";

it("creates an action to add a dictionary", () => {
  const mockDictionaryName = "mock dictionary";
  const type = constants.ADD_DICTIONARY;
  const payload = {
    id: mockId,
    name: mockDictionaryName
  };

  const expectedAction = { type, payload };

  expect(actions.addDictionary(mockId, mockDictionaryName)).toEqual(
    expectedAction
  );
});

it("creates an action to remove a dictionary", () => {
  const type = constants.REMOVE_DICTIONARY;
  const payload = mockId;
  const expectedAction = { type, payload };

  expect(actions.removeDictionary(mockId)).toEqual(expectedAction);
});

it("creates an action to select a dictionary", () => {
  const type = constants.SELECT_DICTIONARY;
  const payload = mockId;
  const expectedAction = { type, payload };

  expect(actions.selectDictionary(mockId)).toEqual(expectedAction);
});
