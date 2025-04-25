import Link from "next/link";

type MenuProps = {
  path: string;
  title: string;
};

export default function MenuListItem({ path, title }: MenuProps) {
  return (
    <li>
      <Link href={path} className="hover:underline">
        {title}
      </Link>
    </li>
  );
}
