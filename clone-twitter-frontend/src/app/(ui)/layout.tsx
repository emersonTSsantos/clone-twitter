import { ReactNode } from "react";

import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

import { NavItem } from "@/components/nav/nav-item";
import { Logo } from "@/components/ui/logo";
import { NavLogout } from "@/components/nav/nav-logout";

type Props = {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <main className="min-h-screen flex justify-center mx-auto max-w-7xl">

            <section className="flex lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-r-2 border-gray-900">

                <div className="flex-1 mt-6">
                    <Logo size={40} />
                    <nav className="mt-11">
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
                    </nav>
                </div>

                <div className="mb-6 flex flex-col gap-4">
                    <NavLogout />
                </div>
            </section>

            <section className="flex-1 max-w-lg">
                {children}
            </section>

            <aside className="bg-gray-800 hidden lg:flex flex-col gap-6 sticky top-0 h-fit w-96 px-8 py-6 border-l-2 border-gray-900">
                DIREITA
            </aside>

        </main>
    )
}