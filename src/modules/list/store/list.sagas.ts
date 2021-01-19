import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { addElementToList, getUserList, removeElementFromList } from '../../../api/user-list.api';
import {
	ListActionTypes,
	receiveAddItemList,
	receiveList,
	receiveRemoveItemFromList,
	RequestAddItemToList, RequestRemoveItemFromList
} from './list.actions';

function* requestListEffect(): SagaIterator {
	try {
		const list = yield call(getUserList);
		yield put(receiveList(list));
	} catch (e) {
		console.error(e);
	}
}

function* requestAddItemToList(action: RequestAddItemToList): SagaIterator {
	try {
		const {item, itemType} = action;
		yield call(addElementToList, item, itemType);
		yield put(receiveAddItemList(item, itemType));
	} catch (e) {
		console.error(e);
	}
}

function* requestRemoveItemFromList(action: RequestRemoveItemFromList): SagaIterator {
	try {
		const {id} = action;
		yield call(removeElementFromList, id);
		yield put(receiveRemoveItemFromList(id));
	} catch (e) {
		console.error(e);
	}
}

function* listSagas() {
	yield takeLatest(ListActionTypes.REQUEST_LIST, requestListEffect);
	yield takeLatest(ListActionTypes.REQUEST_ADD_ITEM, requestAddItemToList);
	yield takeLatest(ListActionTypes.REQUEST_REMOVE_ITEM, requestRemoveItemFromList);
}

export default listSagas;