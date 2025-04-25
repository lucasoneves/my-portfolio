"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuProps = {
  path: string;
  title: string;
};

export default function MenuListItem({ path, title }: MenuProps) {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <li>
      <Link
        href={path}
        className={`hover:underline ${pathname === path ? "text-blue-300" : ""}`}
      >
        {title}
      </Link>
    </li>
  );
}
