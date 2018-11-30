import { combineReducers } from 'redux';

import BestiaireReducer from './BestiaireReducer'; 
import VegetalReducer from './VegetalReducer';
import AuthReducer from './AuthReducer'

const allReducers = combineReducers({
    Bestiaire : BestiaireReducer, 
    Vegetal : VegetalReducer, 
    Auth : AuthReducer
}); 

export default allReducers;