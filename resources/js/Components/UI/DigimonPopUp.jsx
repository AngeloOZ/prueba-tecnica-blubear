import React from "react";
import { motion } from "framer-motion";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Image,
    User,
} from "@nextui-org/react";
import { useGet } from "@/Hooks";

/**
 * Componente React para mostrar un modal con información detallada de un Digimon.
 *
 * Este componente recibe un objeto Digimon y una función de cierre (`onClose`). Muestra un modal con
 * información adicional sobre el Digimon, obtenida mediante una llamada a una API. Incluye manejo de
 * estados de carga y muestra un indicador mientras se cargan los datos.
 *
 * @param {object} props - Propiedades del componente.
 * @param {object} props.digimon - Objeto que contiene la información básica del Digimon. Debe incluir
 *                                 al menos `id`, `name`, e `image`.
 * @param {function} props.onClose - Función para cerrar el modal.
 * @returns Elemento JSX del componente.
 */
export const DigimonPopUp = ({ digimon, onClose }) => {
    const { data: allDigimonData, loading } = useGet(
        `https://digi-api.com/api/v1/digimon/${digimon.name}`
    );

    console.log(allDigimonData);

    return (
        <motion.div
            className="fixed top-8 md:top-0 left-0 w-full h-full flex justify-center items-center z-10"
            onClick={onClose}
            initial={{ background: "rgba(0,0,0,0)" }}
            animate={{ background: "rgba(0,0,0,0.3)" }}
        >
            <motion.div
                className="rounded-xl shadow-large"
                onClick={(e) => e.stopPropagation()}
                layoutId={`digimon-${digimon.id}-${digimon.name}`}
            >
                <Card className="max-w-[650px] w-full  md:w-[550px]">
                    <CardHeader className="px-5 justify-between">
                        <h4 className="font-bold text-base sm:text-lg text-default-600">
                            {digimon.name}
                        </h4>
                        <Button
                            isIconOnly
                            variant="faded"
                            aria-label="close"
                            onClick={onClose}
                        >
                            X
                        </Button>
                    </CardHeader>
                    <Divider />
                    <CardBody className="px-7">
                        <div className="flex flex-col md:flex-row gap-0 md:gap-2">
                            <div className="h-auto grid place-content-center">
                                <Image
                                    className="flex-1 h-[100px] w-[100px] object-contain md:max-h-[250px] md:w-[180px]"
                                    alt={digimon.name}
                                    src={digimon.image}
                                    radius="sm"
                                />
                            </div>
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                                </div>
                            ) : (
                                <CardBodyDigimon digimon={allDigimonData} />
                            )}
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
        </motion.div>
    );
};

function ArticlenBodyDigimon({
    title,
    isFull = false,
    isNotList = false,
    children,
}) {
    return (
        <article className={`${isFull ?? "basis-full"}`}>
            <h3 className="font-semibold text-base text-dark">{title}</h3>
            {isNotList ? (
                children
            ) : (
                <ul className="text-sm text-default-500 list-disc">
                    {children}
                </ul>
            )}
        </article>
    );
}

function CardBodyDigimon({ digimon }) {
    return (
        <div className="w-full p-3">
            <section className="flex flex-col md:flex-row justify-between gap-2 flex-wrap">
                <h2 className="basis-full text-base md:text-xl font-bold">
                    Characteristics
                </h2>
                <ArticlenBodyDigimon title="Levels">
                    {digimon.levels.map((level) => (
                        <li className="ml-4" key={level.id}>
                            {level.level}
                        </li>
                    ))}
                </ArticlenBodyDigimon>
                <ArticlenBodyDigimon title="Types">
                    {digimon.types.map((type) => (
                        <li className="ml-4" key={type.id}>
                            {type.type}
                        </li>
                    ))}
                </ArticlenBodyDigimon>
                <ArticlenBodyDigimon title="Attributes">
                    {digimon.attributes.map((attribute) => (
                        <li className="ml-4" key={attribute.id}>
                            {attribute.attribute}
                        </li>
                    ))}
                </ArticlenBodyDigimon>
                <ArticlenBodyDigimon title="Fields" isFull>
                    <div className="flex flex-wrap gap-1">
                        {digimon.fields.map((field) => (
                            <Image
                                className="object-cover w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                                key={field.id}
                                alt={field.field}
                                radius="sm"
                                src={field.image}
                            />
                        ))}
                    </div>
                </ArticlenBodyDigimon>
            </section>
            <section className="mt-3 hidden md:block">
                <h3 className="text-xl font-bold">Next evolutions</h3>
                <ul className="text-sm text-default-500">
                    {digimon.nextEvolutions.length === 0 && (
                        <li className="ml-3">No evolutions</li>
                    )}
                    {digimon.nextEvolutions.slice(0, 4).map((evolution) => (
                        <li className="mt-1" key={evolution.id}>
                            <div className="flex items-center">
                                <User
                                    avatarProps={{
                                        src: evolution.image,
                                    }}
                                />
                                {evolution.digimon}
                            </div>
                        </li>
                    ))}
                    {digimon.nextEvolutions.length > 4 && (
                        <li className="lg:mt-1" key={digimon.nextEvolutions[5].id}>
                            <div className="flex items-center">
                                <User
                                    avatarProps={{
                                        src: digimon.nextEvolutions[5].image,
                                    }}
                                />
                                Others...
                            </div>
                        </li>
                    )}
                </ul>
            </section>
        </div>
    );
}
