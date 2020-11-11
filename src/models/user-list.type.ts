import { Movie } from './movie.type';
import { Series } from './series.type';
import { CardType } from './enums';

export type UserList = {
	item: Movie | Series;
	type: CardType;
}