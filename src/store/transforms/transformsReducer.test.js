import transformsReducer from "./transformsReducer";
import * as constants from "./constants";
import expect from "expect";

const mockId = "00000000-0000-0000-0000-000000000000";
const mockDictionaryId = "00000000-0000-0000-0000-000000000001";
const mockFrom = "mock from";
const mockTo = "mock to";
const mockTransformRow = {
  id: mockId,
  dictionaryId: mockDictionaryId,
  from: mockFrom,
  to: mockTo
};
const mockStore = {
  rows: [mockTransformRow]
};

describe("transformsReducer", () => {
  it("adds a transform row", () => {
    const type = constants.ADD_TRANSFORM_ROW;
    const payload = mockTransformRow;

    expect(transformsReducer(undefined, { type, payload })).toEqual({
      rows: [mockTransformRow]
    });
  });

  it("updates a transform row with an existing from in a transform row", () => {
    const mockId2 = "00000000-0000-0000-0000-000000000002";
    const mockTo2 = "mock to updated";
    const mockTransformRow2 = {
      id: mockId2,
      dictionaryId: mockDictionaryId,
      from: mockFrom,
      to: mockTo2
    };

    const type = constants.ADD_TRANSFORM_ROW;
    const payload = mockTransformRow2;

    expect(transformsReducer(mockStore, { type, payload })).toEqual({
      rows: [mockTransformRow2]
    });
  });

  it("removes a transform row", () => {
    const type = constants.REMOVE_TRANSFORM_ROW;
    const payload = mockId;

    expect(transformsReducer(mockStore, { type, payload })).toEqual({
      rows: []
    });
  });

  it("removes all transform rows that belong to a dictionary when that dictionary is removed", () => {
    const type = constants.REMOVE_DICTIONARY;
    const payload = mockDictionaryId;

    expect(transformsReducer(mockStore, { type, payload })).toEqual({
      rows: []
    });
  });
});
