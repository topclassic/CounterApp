import {combineReducers} from 'redux'
import typeOperator from './typeOperator'
//Third create combineReducers 
export default combineReducers({
    beforeSelect: typeOperator  
    //test: () => [] //default function
})
