import { IGenre } from "./genre.types";

export interface IMovie {
	id: string;
	slug: string;
	title: string;
	description: string;
	poster: string;
	bigPoster: string;
	videoUrl: string;
	genres: IGenre[];
	actors: [];
	favoritedByUser: [];
	year: number;
	country: string;
	rating: number;
	createdAt: string;
	updatedAt: string;
}
