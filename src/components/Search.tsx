"use client";

import { useState } from "react";
import { Command } from "@/components/ui/command";

const Search = ({ onSearch }: { onSearch: (query: string) => void }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value); // Chama a função passada por prop
    };

    return (
        <div className="nav-home">
            <div className="relative flex-1">
                <Command>
                    <input
                        type="text"
                        placeholder="Digite para buscar receitas..."
                        value={query}
                        onChange={handleSearch}
                        className="pl-10 rounded border bg-white left-3 top-3 h-10"
                    />
                </Command>
            </div>
        </div>
    );
};

export default Search;
 