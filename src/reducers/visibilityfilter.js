
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/todos';
const { SHOW_ALL } = VisibilityFilters;

const initialState = SHOW_ALL;

const actionsMap = {
  setVisibilityFilter(state, action) {
    return action.filter;
  },
};

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};