
const initialState = [];

const actionsMap = {
  addTodo(state, action) {
    return [
	        {
	          text: action.text,
	          key: action.text,
	          completed: false
	        },
	        ...state
	      ];
  },
  completeTodo(state, action) {
    return [
	        ...state.slice(0, action.index),
	        Object.assign({}, state[action.index], {
	          completed: true
	        }),
	        ...state.slice(action.index + 1)
	      ];
  }
};

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};