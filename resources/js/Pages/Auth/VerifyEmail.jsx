import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@nextui-org/react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <GuestLayout>
            <Head title="Verificación de correo" />

            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                Gracias por registrarte. Antes de empezar, ¿podrías verificar tu
                dirección de correo electrónico haciendo clic en el enlace que
                te acabamos de enviar? Si no lo has recibido, estaremos
                encantados de enviarte otro.
            </div>

            {status === "verification-link-sent" && (
                <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                    Se ha enviado un nuevo enlace de verificación a la dirección
                    de correo electrónico que proporcionó durante el registro.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button
                        className="px-4"
                        color="primary"
                        type="submit"
                        isLoading={processing}
                    >
                        Reenviar correo de verificación
                    </Button>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Cerrar sesión
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
