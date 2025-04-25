import Link from "next/link";

type Props = {
  title: string;
  path: string;
};

export default function LinkSection({ title, path }: Props) {
  return (
    <Link href={path} className="text-blue-300 hover:underline">
      {title} →
    </Link>
  );
}
