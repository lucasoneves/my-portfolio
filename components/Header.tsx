// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 bg-neutral-900 px-8 shadow-md sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/" className="text-xl font-bold">
          Lucas Neves
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="/projetos" className="hover:underline">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:underline">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/curriculo" className="hover:underline">
              Currículo
            </Link>
          </li>
          <li>
            <Link href="/contato" className="hover:underline">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
