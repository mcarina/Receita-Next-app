import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  

const Search = () => {
    return (
        <div>
            <Command>
                <CommandInput placeholder="Clique e pesquise receitas..." />
                <CommandList>
                    {/* <CommandEmpty>No results found.</CommandEmpty> */}
                    {/* <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                    </CommandGroup> */}
                    <CommandSeparator />
                    {/* <CommandGroup heading="Settings">
                    <CommandItem>Profile</CommandItem>
                    <CommandItem>Billing</CommandItem>
                    <CommandItem>Settings</CommandItem>
                    </CommandGroup> */}
                </CommandList>
            </Command>

        </div>
    )
}

export default Search