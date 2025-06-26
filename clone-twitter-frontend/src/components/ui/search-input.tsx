import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Input } from "./input"

export const SearchInput = () => {
    return (
        <Input 
            placeholder="Buscar" 
            icon={faMagnifyingGlass}
            filled
        />
    )
}