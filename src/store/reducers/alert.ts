import { AlertActionsEnum } from '../actions/actions';
import { AlertActions, IAlertState } from '../types';

const initialState: IAlertState = {
	isOpened: false,
	text: '',
	status: undefined,
};

export default function alertReducer(
	state = initialState,
	action: AlertActions
): IAlertState {
	switch (action.type) {
		case AlertActionsEnum.SHOW_ALERT: {
			console.log(action, action.payload);
			return {
				...state,
				isOpened: true,
				text: action.payload.text,
				status: action.payload.status,
			};
		}
		case AlertActionsEnum.HIDE_ALERT: {
			return {
				...state,
				isOpened: false,
				text: '',
				status: undefined,
			};
		}
		default:
			return state;
	}
}
