import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { emails, githubLink, linkedinLink } from "../../data";

const Footer = () => {
  return (
    <footer className="w-full py-6 backdrop-blur-md text-center text-sm">
      <div className="max-w-4xl mx-auto px-4 flex flex-col lg:flex-row gap-3 justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Rohit Solanki. All rights reserved.</p>
        <div className="flex flex-row gap-3">
          <FooterLink
            href={githubLink}
            icon={<GithubIcon className="w-5 h-5" />}
            label="GitHub"
          />
          <FooterLink
            href={linkedinLink}
            icon={<LinkedinIcon className="w-5 h-5" />}
            label="LinkedIn"
          />
          <FooterLink
            href={`mailto:${emails.join(",")}`}
            icon={<MailIcon className="w-5 h-5" />}
            label="Email"
          />
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center bg-white text-black rounded-full p-2 transition-all duration-300 ease-in-out overflow-hidden max-w-[35px] hover:max-w-xs"
    >
      <div className="flex-shrink-0">{icon}</div>
      <span className="group-hover:ml-2 whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
        {label}
      </span>
    </a>
  );
};

export default Footer;
