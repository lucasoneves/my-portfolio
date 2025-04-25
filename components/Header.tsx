// components/Header.tsx
import Link from "next/link";
import MenuList from "./MenuList";

export default function Header() {
  return (
    <header className="w-full py-4 bg-neutral-900 px-4 shadow-md sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/" className="text-lg sm:text-xl font-bold">
          Lucas Neves
        </Link>
        <MenuList />
      </nav>
    </header>
  );
}
