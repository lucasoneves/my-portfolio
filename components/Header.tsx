import Link from "next/link";
import MenuList from "./MenuList";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full py-4 bg-neutral-900 px-4 shadow-md sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/" className="text-lg sm:text-xl font-bold">
          <Image
            src="/logotipo-lucasneves.png"
            alt="lucas neves"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <MenuList />
      </nav>
    </header>
  );
}
