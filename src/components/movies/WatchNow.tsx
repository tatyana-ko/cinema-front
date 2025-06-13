import { WatchNowList } from './WatchNowList';

export function WatchNow() {
	return (
		<section className="my-10 mx-auto w-11/12">
			<h2
				className="text-2xl mb-5 uppercase relative before:absolute before:left-0 before:top-0 pl-3
			before:content-[''] before:h-full before:w-[2px] before:bg-yellow-300"
			>
				Watch now
			</h2>
			<WatchNowList />
		</section>
	);
}
