import { HiMenuAlt2 } from 'react-icons/hi';

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between p-4 text-white md:px-14">
      <div className="text-2xl font-extrabold">QuickDict</div>
      <button className="rounded-lg bg-primary-light p-2 text-2xl transition-transform duration-300 hover:scale-110 focus:outline-none">
        <HiMenuAlt2 />
      </button>
    </header>
  );
}
