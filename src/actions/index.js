import { SAVE_COMMENT, FETCH_COMMENTS } from "./types";
import axios from "axios";

export function saveComments(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments(comment) {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}
