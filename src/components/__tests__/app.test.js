import React from "react";
import App from "./../app";
import CommentBox from "./../commentBox";
import { shallow } from "enzyme";
import CommentList from "../commentList";

let wrapped;

beforeEach(()=>{
     wrapped = shallow(<App />);

})

it("show a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("show a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
