import { axiosClassic } from '@/api/axios';
import { IMovie } from '@/types/movie.types';

class MovieService {
	private _MOVIES = '/movies';

	getAll() {
		return axiosClassic.get<IMovie[]>(this._MOVIES);
	}

	getById(id: string) {
		return axiosClassic.get<IMovie>(`${this._MOVIES}/${id}`);
	}

	getBySlug(slug: string) {
		return axiosClassic.get<IMovie>(`${this._MOVIES}/by-slug/${slug}`);
	}
}

export const movieService = new MovieService();
