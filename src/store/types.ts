import { PutEffect } from '@redux-saga/core/effects';
import { AlertActionsEnum, MessageActionsEnum } from './actions/actions';

export interface IResponseGenerator {
	config?: any;
	data?: any;
	headers?: any;
	request?: any;
	status?: number | string;
	message?: string;
	error?: any;
}

export type ReturnSagaType<T, P> = Generator<
	PutEffect<{
		type: T;
		payload?: P;
		errors?: any;
	}>,
	void,
	IResponseGenerator
> | void;

export interface IMessage {
	name: string;
	email: string;
	message: string;
}
export interface IMessageState {
	isSent: boolean;
	message: IMessage | null;
	status: string;
	error: string;
}

export interface IAlert {
	text: string;
	status: 'success' | 'error' | undefined;
	onClick?: () => void;
}
export interface IAlertState {
	isOpened: boolean;
	text: string;
	status: 'success' | 'error' | undefined;
}

export interface ISendMessage {
	type: MessageActionsEnum.SEND_MESSAGE;
	data: IMessage;
}
export interface ISendMessageSuccess {
	type: MessageActionsEnum.SEND_MESSAGE_SUCCESS;
	payload: string;
}
export interface ISendMessageFail {
	type: MessageActionsEnum.SEND_MESSAGE_FAIL;
	payload: string;
}
export type MessageActions =
	| ISendMessage
	| ISendMessageSuccess
	| ISendMessageFail;

export interface IShowAlert {
	type: AlertActionsEnum.SHOW_ALERT;
	payload: {
		text: string;
		status: 'error' | 'success';
	};
}
export interface IHideAlert {
	type: AlertActionsEnum.HIDE_ALERT;
}

export type AlertActions = IShowAlert | IHideAlert;
