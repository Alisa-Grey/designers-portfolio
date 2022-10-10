import { MessageActionsEnum } from '../actions/actions';
import { IMessageState, MessageActions } from '../types';

const initialState: IMessageState = {
	isSent: false,
	message: null,
	status: '',
	error: '',
};

function messageReducer(
	state = initialState,
	action: MessageActions
): IMessageState {
	switch (action.type) {
		case MessageActionsEnum.SEND_MESSAGE: {
			return { ...state, message: action.data };
		}
		case MessageActionsEnum.SEND_MESSAGE_SUCCESS: {
			return { ...state, isSent: true, status: action.payload };
		}
		case MessageActionsEnum.SEND_MESSAGE_FAIL: {
			return { ...state, isSent: false, error: action.payload };
		}
		default:
			return { ...state };
	}
}

export default messageReducer;
