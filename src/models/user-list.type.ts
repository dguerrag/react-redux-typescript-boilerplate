import { Movie } from './movie.type';
import { Series } from './series.type';
import { CardType } from './enums';

export type UserListElement = {
	item: Movie | Series;
	type: CardType;
}