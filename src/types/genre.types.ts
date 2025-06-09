import { IMovie } from './movie.types';

export interface IGenre {
	id: string;
	title: string;
	description: string;
	slug: string;
	movies: IMovie[];
}
