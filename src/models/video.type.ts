import { CardType } from '../constants/enums';

export type Video = {
	id: number;
	title: string;
	duration?: number | string;
	type: CardType;
}