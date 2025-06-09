import { PAGES } from "@/config/pages.config";
import { Bell, Search, UserRound } from "lucide-react";
import Link from "next/link";

export function UserPanel() {
  return (
    <ul className="flex items-center gap-7">
      <li>
        <button type="button" title="Search">
          <Search />
        </button>
      </li>
      <li><Bell /></li>
      <li>
        <Link href={PAGES.AUTH_PAGE} title="Authorization">
          <UserRound />
        </Link>
      </li>
    </ul>
  )
}
