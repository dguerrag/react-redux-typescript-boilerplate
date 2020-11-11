import { Video } from './video.type';
import { Movie } from './movie.type';

type Season = {
	chapters: Video[];
}

export type Series = Movie & {
	season: Season[];
};
