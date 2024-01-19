import { useRef } from 'react';

import { BsSearch } from 'react-icons/bs';

interface SearchFormProps {
  onSearch: (e: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key !== 'Enter') return;

        const searchTerm = searchInputRef.current?.value;

        if (!searchTerm?.trim()) return;

        onSearch(searchTerm)
    };

    return (
        <div className="relative w-full max-w-md text-white">
            <input
                id="search"
                ref={searchInputRef}
                type="text"
                placeholder="Search any word..."
                className="w-full rounded-full border-none bg-primary-light  px-10 py-3 text-sm placeholder-gray-300 outline-none md:px-14 md:py-6"
                onKeyDown={handleKeyDown}
            />
            <BsSearch className="absolute left-3 top-3 text-xl md:left-6 md:top-6 " />
        </div>
    );
}
