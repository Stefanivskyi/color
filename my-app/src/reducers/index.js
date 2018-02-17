import { combineReducers } from 'redux';

import activeColor from './activeColor';
import bgColor from './bgColor';
import animation from './animation';

export default combineReducers({
  activeColor,
  bgColor,
  animation
})
