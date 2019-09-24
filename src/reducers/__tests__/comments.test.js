import commentsReducer from "../commentsReducer";
import { SAVE_COMMENT } from "./../../actions/types";

it("handles actions of type comment", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("Handles actions with unknown type", () => {
  const newState = commentsReducer([], {});
  expect(newState).toEqual([]);
});
  