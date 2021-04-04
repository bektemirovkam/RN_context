import { CHANGE_SCREEN } from "../types";

const handlers = {
  [CHANGE_SCREEN]: (state, payload) => payload,
  DEFAULT: (state) => state,
};

export const screenReducer = (state, action) => {
  const hanlder = handlers[action.type] || handlers.DEFAULT;
  return hanlder(state, action.payload);
};
