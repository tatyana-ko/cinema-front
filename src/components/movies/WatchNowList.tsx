'use client';

import { movieService } from '@/services/movies.service';
import { IMovie } from '@/types/movie.types';
import { useQuery } from '@tanstack/react-query';
import { WatchNowItem } from './WatchNowItem';

export function WatchNowList() {
	const { isPending, data } = useQuery({
		queryKey: ['watch-now movies'],
		queryFn: () => movieService.getAll(),
	});

	return (
		<ul className="flex items-center gap-7">
			{data?.data.map((movie: IMovie) => (
				<WatchNowItem key={movie.id} movie={movie} />
			))}
		</ul>
	);
}
