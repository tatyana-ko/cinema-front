import { IMovie } from './movie.types';

export interface IUser {
	id: string;
	name?: string;
	email: string;
	password: string;
}

export interface IUserFull extends IUser {
	favorites: IMovie[];
}
