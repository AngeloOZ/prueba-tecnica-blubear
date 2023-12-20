import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components";

export default function Authenticated({ user, title = "Inicio", children }) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Head title={title} />
            <Navbar user={user} />
            <main className="p-5">{children}</main>
        </div>
    );
}
