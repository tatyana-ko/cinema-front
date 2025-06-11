import { IMovie } from '@/types/movie.types';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
	movie: IMovie;
	isActiveMovie: boolean;
}

export function HeroSlide({ movie, isActiveMovie }: Props) {
	const movieRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (isActiveMovie) {
			movieRef.current?.play();
		} else {
			movieRef.current?.pause();
			// movieRef.current?.currentTime = 0
		}
	}, [isActiveMovie]);

	return (
		<li
			className={twMerge(
				'w-full h-full absolute transition-opacity duration-1000',
				isActiveMovie ? 'opacity-100 z-10' : 'opacity-0 z-0',
			)}
		>
			<Link href={movie.slug} title="watch now">
				<video
					ref={movieRef}
					src={movie.videoUrl}
					muted
					loop
					playsInline
					className="w-full h-full object-cover absolute inset-0"
				/>
			</Link>

			<div className="absolute bottom-10 right-10 w-1/3 text-right z-20">
				<h2 className="mb-4 text-4xl font-bold uppercase">{movie.title}</h2>
				<p className="text-md">{movie.description}</p>
				<p className="mt-4 uppercase">
					Rating IMDb: {movie.rating}
				</p>
			</div>

			<button
				type="button"
				className="absolute bottom-10 left-10 px-3 py-1 z-50 border border-slate-300 bg-transparent rounded-md uppercase
           hover:bg-gray-200 hover:border-transparent hover:text-black transition-colors duration-500"
			>
				add to favorites
			</button>
		</li>
	);
}
