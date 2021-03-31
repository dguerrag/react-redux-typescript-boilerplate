import React from 'react';
import { useListReducerList } from '../../list/store/list.reducer';
import { ListItems } from '../../../components/items-list/items-list';

export const FavoriteListItems = () => {
	// get data from store and attach them to the state.
	const myList = useListReducerList();
	return (
		!!myList.length ? <ListItems title={'My List'} items={myList}/> : <></>
	)
}