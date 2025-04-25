import Link from "next/link";

type ProjectCardProps = {
  path: string;
  title: string;
  description: string;
};

export default function ProjectCard({
  path,
  title,
  description,
}: ProjectCardProps) {
  return (
    <Link
      href={path}
      className="border border-gray-300 rounded-xl p-4 hover:shadow-md transition"
    >
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </Link>
  );
}
