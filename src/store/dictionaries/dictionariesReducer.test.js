import dictionariesReducer from "./dictionariesReducer";
import * as constants from "./constants";
import expect from "expect";

const mockId = "00000000-0000-0000-0000-000000000000";
const mockDictionaryName = "mock dictionary";
const mockDictionary = {
  id: mockId,
  name: mockDictionaryName
};
const mockStore = {
  list: [mockDictionary],
  selected: mockId
};

describe("dictionariesReducer", () => {
  it("adds a dictionary", () => {
    const type = constants.ADD_DICTIONARY;
    const payload = mockDictionary;

    expect(dictionariesReducer(undefined, { type, payload })).toEqual({
      list: [mockDictionary],
      selected: null
    });
  });

  it("selects a dictionary", () => {
    const type = constants.SELECT_DICTIONARY;
    const payload = mockId;

    expect(dictionariesReducer(mockStore, { type, payload })).toEqual({
      list: [mockDictionary],
      selected: mockId
    });
  });

  it("removes a dictionary", () => {
    const type = constants.REMOVE_DICTIONARY;
    const payload = mockId;

    expect(dictionariesReducer(mockStore, { type, payload })).toEqual({
      list: [],
      selected: null
    });
  });
});
