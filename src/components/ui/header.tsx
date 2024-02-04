import type { JSX, SVGProps } from "react";

import Link from "next/link";

import { AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-white px-6 dark:bg-gray-900">
      <Link className="flex items-center" href="/">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Goopi Real</span>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="ml-4 h-9 w-9">
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute -right-4">
          <DropdownMenuItem>
            <Link href="/incident">Collection</Link>
          </DropdownMenuItem>
          <Link href="/about">
            <DropdownMenuItem>Setting</DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <Link href="#" className="text-red-600">
              Logout
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
