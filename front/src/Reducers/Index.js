import { combineReducers } from 'redux';

import BestiaireReducer from './BestiaireReducer'; 
import VegetalReducer from './VegetalReducer';
import AuthReducer from './AuthReducer'; 
import CarouselReducer from './CarouselReducer'

const allReducers = combineReducers({
    Bestiaire : BestiaireReducer, 
    Vegetal : VegetalReducer, 
    Auth : AuthReducer, 
    Carousel : CarouselReducer
}); 

export default allReducers;