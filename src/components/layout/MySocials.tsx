import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

export default function MySocials() {
  return (
    <div className="absolute right-4 top-16 z-50 rounded-lg bg-primary-light p-6 shadow ">
      <p className="font-bold">Hey! Let's connect 🙂</p>
      <div className="mt-4 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/priscilla-e"
          target="_blank"
          className="duration-300 hover:scale-105 hover:text-gray-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/priscilla-emasoga"
          target="_blank"
          className="duration-300 hover:scale-105 hover:text-gray-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/cilla.dev"
          target="_blank"
          className="duration-300 hover:scale-105 hover:text-gray-300"
        >
          <GrInstagram />
        </a>
        <a
          href="mailto:priscillaemasoga[at]gmail.com"
          target="_blank"
          className="duration-300 hover:scale-105 hover:text-gray-300"
        >
          <MdEmail />
        </a>
      </div>
    </div>
  );
}
