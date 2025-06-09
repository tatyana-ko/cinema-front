import { Bell, MapPin, Search, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UserPanel } from "./UserPanel";

export function Header() {
  return (
    <header className="mx-auto my-9 px-4 w-11/12 flex justify-between items-center rounded-2xl bg-transparent shadow-md shadow-[#445478]">
      <div className="flex items-center gap-1">
        <MapPin size={16} />
        <p>City</p>
      </div>

      <Link href={'/'}>
        <Image
          src="../logo.svg"
          alt="logo"
          width={48}
          height={48}
        />
      </Link>

      <UserPanel />
    </header>
  )
}
