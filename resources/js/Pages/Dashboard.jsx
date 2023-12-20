import { useEffect, useState } from "react";
import { Pagination } from "@nextui-org/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useGetDigimons } from "@/Hooks";
import { ContainerDigimons } from "@/Components";

export default function Dashboard({ auth, digimonsData, pagination }) {
    const { getDigimons } = useGetDigimons();
    const [currentPage, setCurrentPage] = useState(1);
    const [digimons, setDigimons] = useState(digimonsData);
    const [pageData, setPageData] = useState(pagination);

    useEffect(() => {
        getDigimons(currentPage).then((result) => {
            setDigimons(result.content);
            setPageData(result.pageable);
        });
    }, [currentPage]);

    return (
        <AuthenticatedLayout user={auth.user}>
            <main>
                {pageData && (
                    <div className="flex justify-center mb-3">
                        <Pagination
                            variant="bordered"
                            total={pageData.totalPages}
                            initialPage={currentPage}
                            showControls
                            showShadow
                            onChange={(e) => setCurrentPage(e)}
                        />
                    </div>
                )}
                <ContainerDigimons digimons={digimons} />
            </main>
        </AuthenticatedLayout>
    );
}
