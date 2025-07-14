import { IUser } from './user.types';

export interface IAuthData {
	email: string;
	password: string;
}

export interface IAuthForm extends IAuthData {
	confirmPassword?: string;
}

export interface IAuthResponse {
	user: IUser;
	accessToken: string;
}
