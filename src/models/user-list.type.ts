import { Movie } from './movie.type';
import { Series } from './series.type';
import { CardType } from '../constants/enums';

export type UserListElement = {
	item: Movie | Series;
	type: CardType;
}