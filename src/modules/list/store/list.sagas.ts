import { call, put, takeLatest } from 'redux-saga/effects';
import { addElementToList, getUserList, removeElementFromList } from '../../../api/user-list.api';
import {
	ListActionTypes,
	receiveAddItemList,
	receiveList,
	receiveRemoveItemFromList,
	RequestAddItemToList,
	RequestRemoveItemFromList
} from './list.actions';
import { CardType } from '../../../constants/enums';
import { addFavoriteMovie, removeFavoriteMovie } from '../../movies/store/movies.actions';
import { addFavoriteSeries, removeFavoriteSeries } from '../../series/store/series.actions';

function* requestListEffect() {
	try {
		const list = yield call(getUserList);
		yield put(receiveList(list));
	} catch (e) {
		console.error(e);
	}
}

function* requestAddItemToList(action: RequestAddItemToList) {
	try {
		const {item} = action;
		yield call(addElementToList, item);
		yield put(receiveAddItemList(item));
		if (item.type === CardType.Movie) {
			yield put(addFavoriteMovie(item.id));
		} else {
			yield put(addFavoriteSeries(item.id));
		}
	} catch (e) {
		console.error(e);
	}
}

function* requestRemoveItemFromList(action: RequestRemoveItemFromList) {
	try {
		const {id} = action;
		yield call(removeElementFromList, id);
		yield put(receiveRemoveItemFromList(id, action.itemType));
		if (action.itemType === CardType.Movie) {
			yield put(removeFavoriteMovie(id));
		} else {
			yield put(removeFavoriteSeries(id));
		}
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