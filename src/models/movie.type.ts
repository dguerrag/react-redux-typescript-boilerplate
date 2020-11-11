import { Video } from './video.type';

export type Movie = Video & {
	description: string;
	director: string;
	year: number;
	imgUrl: string;
	coincidence: number;
};