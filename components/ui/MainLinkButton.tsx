import React from "react";
import Link from "next/link";

export default function MainLinkButton({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  return (
    <Link
      href={path}
      className="rounded-xl cursor-pointer font-medium transition-all duration-200 focus:outline-none px-6 py-3 w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
    >
      {title}
    </Link>
  );
}
