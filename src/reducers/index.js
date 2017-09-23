import { combineReducers } from 'redux'

import counter from './counter';
import todos from './todos';
import visibilityfilter from './visibilityfilter';

export default combineReducers({
  counter,
  todos,
  visibilityfilter
})

