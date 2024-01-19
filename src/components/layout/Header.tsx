import { HiMenuAlt2 } from "react-icons/hi";

export default function Header() {
  return (
    <header className="flex items-center justify-between text-white p-4 md:px-14">
      <div className="text-2xl font-bold hover:cursor">QuickDict</div>
      <button className="bg-primary-light p-2 rounded-lg text-2xl">
        <HiMenuAlt2 />
      </button>
    </header>
  );
}
