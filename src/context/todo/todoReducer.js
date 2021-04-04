import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./../types";

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
  [ADD_TODO]: (state, { text }) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: Date.now().toString(),
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
  DEFAULT: (state) => state,
};

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
