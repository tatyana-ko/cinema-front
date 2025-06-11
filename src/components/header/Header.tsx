import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { UserPanel } from './UserPanel';

export function Header() {
	return (
		<header
			className="absolute top-10 left-[50%] -translate-x-[50%] px-4 w-11/12 flex justify-between items-center z-50
    rounded-2xl bg-transparent shadow-md shadow-[#2b2e4f]"
		>
			<div className="flex items-center gap-1">
				<MapPin size={16} />
				<p>City</p>
			</div>

			<Link href={'/'}>
				<Image src="../logo.svg" alt="logo" width={48} height={48} />
			</Link>

			<UserPanel />
		</header>
	);
}
