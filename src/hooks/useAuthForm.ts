import { PAGES } from '@/config/pages.config';
import { authService } from '@/services/auth.service';
import { IAuthData, IAuthForm } from '@/types/auth.types';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { SubmitHandler, UseFormReset } from 'react-hook-form';
import toast from 'react-hot-toast';

export function useAuthForm(type: 'register' | 'login', reset: UseFormReset<IAuthForm>) {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const { mutateAsync, isPending: isAuthPending } = useMutation({
		mutationKey: [type],
		mutationFn: (data: IAuthData) => authService.main(type, data),
	});

	const onSubmitForm: SubmitHandler<IAuthForm> = ({ email, password }) => {
		toast.promise(mutateAsync({ email, password }), {
			loading: 'Loading...',
			success: () => {
				startTransition(() => {
					reset();
					router.push(PAGES.HOME_PAGE);
				});

				return 'You have successfully logged in!';
			},
			error: e => {
				if (axios.isAxiosError(e)) {
					return e.response?.data?.message;
				}
			},
		});
	};

	const isLoading = isPending || isAuthPending;

	return { onSubmitForm, isLoading };
}
