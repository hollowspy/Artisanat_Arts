import { combineReducers } from 'redux';

import BestiaireReducer from './BestiaireReducer'

const allReducers = combineReducers({
    Bestiaire : BestiaireReducer
}); 

export default allReducers;