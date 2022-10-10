import { combineReducers } from 'redux';
import messageReducer from './message';
import alertReducer from './alert';

export const rootReducer = combineReducers({
	message: messageReducer,
	alert: alertReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
