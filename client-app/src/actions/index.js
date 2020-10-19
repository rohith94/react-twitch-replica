import streams from "../api/streams";
import { CREATE_STREAM, SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (userId) => {
  return { type: SIGN_IN, payload: userId };
};

export const signOut = (userId) => {
  return { type: SIGN_OUT, payload: userId };
};

export const createStream = (formValues) => {
  return async (dispatch) => {
    const response = await streams.post("/streams", formValues);
    dispatch({ type: CREATE_STREAM, payload: response.data });
  };
};
