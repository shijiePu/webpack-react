export default function tasksReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return [...state, { name: action.name, id: action.id }];
    case "del":
      return state.filter((item) => item.id !== action.id);
    case "edit":
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            name: action.name,
            id: action.id,
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
}
