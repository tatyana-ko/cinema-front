import { IMovie } from './movie.types';

export interface IActor {
	id: string;
	name: string;
	slug: string;
	photo: string;
	createdAt: string;
	updatedAt: string;
	movies: IMovie[];
}
