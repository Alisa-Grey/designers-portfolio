import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import watchSendMessage from './message';

const rootSaga = function* (): Generator<
	AllEffect<ForkEffect<void>>,
	void,
	unknown
> {
	yield all([fork(watchSendMessage)]);
};

export default rootSaga;