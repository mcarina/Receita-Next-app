"use client";

import { useState, React } from "react";
import {
    Command,
    CommandList,
    CommandItem,
} from "@/components/ui/command";
import { getSearch } from "@/lib/actions/recipe.actions";

const Search = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        const results = await getSearch(value);
        setSuggestions(results);
    };

    return (
        <div>
            <Command>
                <input
                    type="text"
                    placeholder="Digite para buscar receitas..."
                    value={query}
                    onChange={handleSearch}
                    className="p-btn"
                />
                <CommandList>
                    {suggestions.length > 0 &&
                        suggestions.map((recipe: { id: number; title: string }) => (
                            <CommandItem key={recipe.id}>
                                {recipe.title}
                            </CommandItem>
                        ))}
                </CommandList>
            </Command>

        </div>
    );
};

export default Search;
