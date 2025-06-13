import { IMovie } from '@/types/movie.types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	movie: IMovie;
}

export function WatchNowItem({ movie }: Props) {
	return (
		<li>
			<Link href={movie.slug} title={movie.title}>
				<Image
					src={movie.poster}
					width={240}
					height={300}
					alt="movie poster"
					style={{ aspectRatio: '4/5' }}
					className="rounded-md"
				/>
			</Link>
		</li>
	);
}
