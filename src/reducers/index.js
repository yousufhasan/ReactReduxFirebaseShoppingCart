import { combineReducers } from 'redux';
import MessageReducer from './reducer_messages'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
 	message: MessageReducer,
 	form: formReducer
});

export default rootReducer;
