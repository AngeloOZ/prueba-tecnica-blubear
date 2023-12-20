import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";

import { Head, Link, useForm } from "@inertiajs/react";
import { Input, Button } from "@nextui-org/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Registro" />
            <h1 className=" text-center my-1 mb-8 text-3xl font-semibold">
                Registro
            </h1>
            <form onSubmit={submit}>
                <div className="grid gap-y-4">
                    <Input
                        label="Nombres"
                        type="name"
                        name="name"
                        value={data.name}
                        variant="bordered"
                        onChange={(e) => setData("name", e.target.value)}
                        isInvalid={!!errors.name}
                        errorMessage={errors.name}
                    />

                    <Input
                        label="Correo electrónico"
                        type="email"
                        name="email"
                        value={data.email}
                        variant="bordered"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        isInvalid={!!errors.email}
                        errorMessage={errors.email}
                    />

                    <Input
                        label="Contraseña"
                        type="password"
                        name="password"
                        value={data.password}
                        variant="bordered"
                        onChange={(e) => setData("password", e.target.value)}
                        autoComplete="new-password"
                        isInvalid={!!errors.password}
                        errorMessage={errors.password}
                    />

                    <Input
                        label="Confirmar contraseña"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        variant="bordered"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        autoComplete="new-password_confirmation"
                        isInvalid={!!errors.password_confirmation}
                        errorMessage={errors.password_confirmation}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Ya tienes una cuenta?, Inicia sesión
                    </Link>

                    <Button
                        className="px-4 ml-4"
                        color="primary"
                        type="submit"
                        isLoading={processing}
                    >
                        Registrarme
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
