import * as constants from "./constants";
import * as actions from "./actions";
import expect from "expect";

const mockId = "00000000-0000-0000-0000-000000000000";

it("creates an action to add a transform row", () => {
  const mockFrom = "mock from";
  const mockTo = "mock to";
  const mockDictionaryId = "00000000-0000-0000-0000-000000000001";
  const mockDictionary = {
    id: mockId,
    dictionaryId: mockDictionaryId,
    from: mockFrom,
    to: mockTo
  };

  const type = constants.ADD_TRANSFORM_ROW;
  const payload = mockDictionary;
  const expectedAction = { type, payload };

  expect(actions.addTransformRow(mockDictionary)).toEqual(expectedAction);
});

it("creates an action to remove a transform row", () => {
  const type = constants.REMOVE_TRANSFORM_ROW;
  const payload = mockId;
  const expectedAction = { type, payload };

  expect(actions.removeTransformRow(mockId)).toEqual(expectedAction);
});
