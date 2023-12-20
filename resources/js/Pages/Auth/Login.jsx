import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";

import { Head, Link, useForm } from "@inertiajs/react";
import { Input, Button } from "@nextui-org/react";
import * as Yup from "yup";

import { handleErrorsYup } from "@/utils/handleErrorsYup";

export default function Login() {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        setError,
        clearErrors,
    } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Correo electrónico inválido")
            .required("Correo electrónico requerido"),
        password: Yup.string().required("Contraseña requerida"),
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = async (e) => {
        try {
            e.preventDefault();
            clearErrors();
            await schema.validate(data, { abortEarly: false });
            post(route("login"));
        } catch (error) {
            handleErrorsYup(error, setError);
        }
    };

    return (
        <GuestLayout>
            <Head title="Iniciar sesión" />

            <h1 className=" text-center my-1 mb-8 text-3xl font-semibold">
                Iniciar sesión
            </h1>

            <form onSubmit={submit}>
                <div className="grid gap-y-4">
                    <Input
                        label="Correo electrónico"
                        type="email"
                        name="email"
                        value={data.email}
                        variant="bordered"
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
                        isInvalid={!!errors.password}
                        errorMessage={errors.password}
                    />
                </div>

                {/* <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                            Remember me
                        </span>
                    </label>
                </div> */}

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("register")}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        No tienes una cuenta?, Registrate
                    </Link>

                    <Button
                        className="px-4 ml-4"
                        color="primary"
                        type="submit"
                        isLoading={processing}
                    >
                        Iniciar sesión
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
