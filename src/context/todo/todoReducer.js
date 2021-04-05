import {
  ADD_TODO,
  REMOVE_TODO,
  SHOW_ERROR,
  SHOW_LOADER,
  UPDATE_TODO,
  FETCH_TODOS,
  CLEAN_ERROR,
  HIDE_LOADER,
} from "./../types";

// export const todoReducer = (state, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             id: Date.now().toString(),
//             text: action.text,
//           },
//         ],
//       };
//     case REMOVE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((t) => t.id !== action.id),
//       };
//     case UPDATE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((t) => {
//           if (t.id === action.id) {
//             t.text = action.text;
//           }
//           return t;
//         }),
//       };
//     default:
//       return state;
//   }
// };

const handlers = {
  [ADD_TODO]: (state, { text, id }) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id,
        text,
      },
    ],
  }),

  [REMOVE_TODO]: (state, { id }) => ({
    ...state,
    todos: state.todos.filter((t) => t.id !== id),
  }),

  [UPDATE_TODO]: (state, { id, text }) => ({
    ...state,
    todos: state.todos.map((t) => {
      if (t.id === id) {
        t.text = text;
      }
      return t;
    }),
  }),
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [HIDE_LOADER]: (state) => ({ ...state, loading: false }),
  [SHOW_ERROR]: (state, { error }) => ({ ...state, error }),
  [CLEAN_ERROR]: (state) => ({ ...state, error: null }),
  [FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),
  DEFAULT: (state) => state,
};

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
