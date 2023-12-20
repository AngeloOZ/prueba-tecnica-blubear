import {
    Navbar as NextUiNavbar,
    NavbarBrand,
    NavbarContent,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
} from "@nextui-org/react";

import { Link } from "@inertiajs/react";

/**
 * Componente de React para mostrar un menú de navegacion
 *
 * Este componente muestra una barra de navegación con un logo, un título central y un menú desplegable
 * para acciones de usuario. El menú de usuario muestra el nombre del usuario y opciones como 'Analytics',
 * 'System' y 'Log Out'.
 *
 * @param {object} props - Propiedades del componente.
 * @param {object} props.user - Objeto que contiene información del usuario. Debe incluir al menos `name`.
 * @returns Elemento JSX del componente.
 */
export const Navbar = ({ user }) => {
    return (
        <NextUiNavbar maxWidth="xl">
            <NavbarBrand>
                <img
                    src="/assets/logo/bluebear.png"
                    className="w-14 mr-2"
                    alt="Logo bluebear"
                />
                <p className="text-black dark:text-white font-extralight">
                    BLUE BEAR
                </p>
            </NavbarBrand>
            <NavbarContent justify="center">
                <h1 className=" hidden md:block font-bold text-lg uppercase">
                    prueba tecnica - angello
                </h1>
            </NavbarContent>
            <NavbarContent justify="end">
                <Dropdown
                    placement="bottom-start"
                    className="text-black dark:text-white"
                >
                    <DropdownTrigger>
                        <Avatar
                            as="button"
                            isBordered
                            showFallback
                            name={user.name.split(" ")[0]}
                            classNames={{
                                name: "text-black dark:text-white uppercase",
                            }}
                            src="https://images.unsplash.com/broken"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-bold">Hola, bienvenido</p>
                            <p className="font-bold capitalize">{user.name}</p>
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            <Link method="post" href={route('logout')}>Cerrar sesión</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </NextUiNavbar>
    );
};
