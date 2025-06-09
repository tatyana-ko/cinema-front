import axios, { CreateAxiosDefaults } from 'axios';

export const options: CreateAxiosDefaults = {
	baseURL: 'http://localhost:4200/api',
	headers: {
		'Content-type': 'application/json',
	},
	withCredentials: true,
};

export const axiosClassic = axios.create(options);