import React, { createContext, useReducer } from 'react';
import { UserListElement } from '../../models/user-list.type';
import { ListActions, ListActionTypes } from './list.actions';

export type ListStateType = {
	list: UserListElement;
}

const listInitialState: ListStateType = {
	list: []
};

export const listReducer = (state = listInitialState, action: ListActions): ListStateType => {
	switch (action.type) {
		case ListActionTypes.RECEIVE_LIST:
			return {...state, list: action.list};
		case ListActionTypes.RECEIVE_ADD_ITEM:
			return {
				...state,
				list: [
					...state.list,
					action.item
				]
			};
		case ListActionTypes.RECEIVE_REMOVE_ITEM:
			return {
				...state,
				list: state.list.filter(e => e.id !== action.id)
			};
		default:
			return state;
	}
};

export const FavoritesContext = createContext<[ListStateType, Function]>({listInitialState} as any);

export const FavoritesContextProvider = ({children}: any) => (
	<FavoritesContext.Provider value={useReducer(listReducer, listInitialState as any)}>
		{children}
	</FavoritesContext.Provider>
);