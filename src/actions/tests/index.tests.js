import { saveComments } from "./../index";
import { SAVE_COMMENT } from "./../types";

describe("save comment", () => {
  it("has the correct type", () => {
    const action = saveComments();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it("has the correct payload", () => {
    const action = saveComments("New comment");
    expect(action.payload).toEqual("New comment");
  });
});
