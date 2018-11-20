import { combineReducers } from 'redux';

import BestiaireReducer from './BestiaireReducer'; 
import VegetalReducer from './VegetalReducer'

const allReducers = combineReducers({
    Bestiaire : BestiaireReducer, 
    Vegetal : VegetalReducer
}); 

export default allReducers;