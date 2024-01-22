import { useState } from 'react';
import MySocials from './MySocials';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

export default function Header() {
  const [socialsVisible, setSocialsVisible] = useState(false);
  return (
    <header className="container relative mx-auto flex items-center justify-between p-4 text-white md:px-14">
      <div className="text-2xl font-extrabold">QuickDict</div>

      <button
        className="rounded-lg bg-primary-light p-2 text-2xl transition-transform duration-300 hover:scale-110 focus:outline-none"
        onClick={() => setSocialsVisible((prevState) => !prevState)}
      >
        {socialsVisible ? <IoClose /> : <HiMenuAlt2 />}
      </button>

      {socialsVisible && <MySocials />}
    </header>
  );
}
