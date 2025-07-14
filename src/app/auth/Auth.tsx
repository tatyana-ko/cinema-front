'use client';

import { useAuthForm } from '@/hooks/useAuthForm';
import { authSchema } from '@/schemas/auth.schema';
import { IAuthForm } from '@/types/auth.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function Auth() {
	const [isLoginForm, setIsLoginForm] = useState(true);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm<IAuthForm>({
		resolver: yupResolver(authSchema),
	});

	const { isLoading, onSubmitForm } = useAuthForm(isLoginForm ? 'login' : 'register', reset);

	return (
		<div className="min-h-screen flex items-center justify-center">
			<form onSubmit={handleSubmit(onSubmitForm)} className="w-1/3 mx-auto p-4 shadow-2xl">
				<div className="flex gap-6 justify-center mb-4 pb-2 border-b-[0.5] border-b-slate-600">
					<button type="button" onClick={() => setIsLoginForm(true)} className="cursor-pointer">
						Login
					</button>
					<button type="button" onClick={() => setIsLoginForm(false)} className="cursor-pointer">
						Register
					</button>
				</div>

				<div className="flex items-start flex-col gap-5">
					<label className="w-full">
						<span className="block mb-2 text-gray-500 font-semibold">Email: </span>
						<input
							type="email"
							placeholder="email@mail.com"
							className="w-full px-3 py-1 border border-slate-600 rounded-md"
							{...register('email')}
						/>
						{errors.email && (
							<span className="block mt-1 text-red-500">{errors.email.message}</span>
						)}
					</label>

					<label className="w-full">
						<span className="block mb-2 text-gray-500 font-semibold">Password: </span>
						<input
							type="text"
							placeholder="******"
							className="w-full px-3 py-1 border border-slate-600 rounded-md"
							{...register('password')}
						/>
						{errors.password && (
							<span className="block mt-1 text-red-500">{errors.password.message}</span>
						)}
					</label>

					{!isLoginForm && (
						<label className="w-full">
							<span className="block mb-2 text-gray-500 font-semibold">
								Please, confirm password::{' '}
							</span>
							<input
								type="text"
								placeholder="******"
								className="w-full px-3 py-1 border border-slate-600 rounded-md"
								{...register('confirmPassword', {
									required: true,
									validate: value => value === watch('password') || 'Passwords do not match',
								})}
							/>
							{errors.confirmPassword && (
								<span className="block mt-1 text-red-500">{errors.confirmPassword.message}</span>
							)}
						</label>
					)}
				</div>

				<button
					type="submit"
					className="block mt-5 ml-auto py-2 px-4 rounded-md bg-[#81baa0] hover:bg-[#8ad1b1] cursor-pointer"
					disabled={isLoading}
				>
					{isLoginForm ? 'Login' : 'Register'}
				</button>
			</form>
		</div>
	);
}
