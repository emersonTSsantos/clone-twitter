import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Logo } from "../ui/logo"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { SearchInput } from "../ui/search-input"
import { NavItem } from "../nav/nav-item"

import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLogout } from "../nav/nav-logout"

type Props = {
    closeAction: () => void
}

export const HomeMenu = ({ closeAction }: Props) => {

    return (
        <div className="lg:hidden fixed inset-0 p-6 bg-black">
            <div className="flex justify-between items-center">

                <Logo size={32}/>

                <div onClick={closeAction} 
                    className="cursor-pointer flex justify-center 
                                items-center size-12 rounded-full border-2 
                                border-gray-900 hover:bg-gray-700"
                >

                    <FontAwesomeIcon icon={faXmark} className="size-6" /> 
                </div>
            </div>
            <div className="my-6">
                <SearchInput />
            </div>

            <div>
                <NavItem 
                    label="Página Inicial"
                    icon={faHouse}
                    href="/home"
                />
                
                <NavItem 
                    label="Meu Perfil"
                    icon={faUser}
                    href="/profile"
                />
                <NavLogout />
            </div>
        </div>
    )
}