import { ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { AlertActionsEnum, MessageActionsEnum } from '../actions/actions';
import { IResponseGenerator, ReturnSagaType, ISendMessage } from '../types';

const sendMessage = function* ({
	data,
}: ISendMessage): ReturnSagaType<MessageActionsEnum, IResponseGenerator> {
	try {
		let resData: IResponseGenerator = yield fetch(
			'https://formsubmit.co/ajax/example@mail.com',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					name: data.name,
					email: data.email,
					message: data.message,
				}),
			}
		).then(async (response) => {
			let resData = await response.json();

			if (resData.success === 'false') {
				const error = resData.message || response.status;
				return Promise.reject(error);
			}
			return resData;
		});
		yield put({
			type: MessageActionsEnum.SEND_MESSAGE_SUCCESS,
			payload: resData,
		});
		yield put({
			type: AlertActionsEnum.SHOW_ALERT,
			payload: { text: 'Thank you for emailing us!', status: 'success' },
		});
	} catch (error: any) {
		yield put({
			type: AlertActionsEnum.SHOW_ALERT,
			payload: {
				text: 'Something went wrong. Please try again later or send us an email using Contacts section',
				status: 'error',
			},
		});
		yield put({ type: MessageActionsEnum.SEND_MESSAGE_FAIL, payload: error });
	}
};

const watchSendMessage = function* (): Generator<
	ForkEffect<never>,
	void,
	unknown
> {
	yield takeEvery(MessageActionsEnum.SEND_MESSAGE, sendMessage);
};

export default watchSendMessage;
