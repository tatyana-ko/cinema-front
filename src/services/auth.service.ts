import { axiosClassic } from '@/api/axios';
import { IAuthData, IAuthResponse } from '@/types/auth.types';

export class AuthService {
	private _AUTH = '/auth';

	async main(type: 'register' | 'login', data: IAuthData) {
		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/${type}`, data);

		return response;
	}
}

export const authService = new AuthService();
