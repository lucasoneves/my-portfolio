import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold mt-4">Redes sociais</h2>
      <ul className="flex gap-4">
        <li>
          <a
            href="https://github.com/lucasoneves"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/lucasoneves/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </li>
      </ul>
    </div>
  );
};
