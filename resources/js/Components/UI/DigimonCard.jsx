import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

/**
 * Componente React para mostrar una tarjeta con información de un Digimon.
 *
 * Este componente recibe un objeto Digimon y una función para establecer el Digimon seleccionado. Al hacer clic
 * en la tarjeta, se llama a `setSelectedDigimon` con el objeto Digimon proporcionado, lo que permite que el componente
 * padre maneje la selección.
 *
 * @param {object} props - Propiedades del componente.
 * @param {object} props.digimon - Objeto que contiene la información del Digimon. Debe incluir al menos `id`, `name`,
 *                                 e `image`.
 * @param {function} props.setSelectedDigimon - Función para establecer el Digimon seleccionado en el componente padre.
 * @returns Elemento JSX del componente.
 */

export const DigimonCard = ({ digimon, setSelectedDigimon }) => {
    return (
        <motion.div layoutId={`digimon-${digimon.id}-${digimon.name}`}>
            <Card
                className="py-4 w-full"
                isPressable
                onClick={() => setSelectedDigimon(digimon)}
            >
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{digimon.name}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-0">
                    <div className="flex justify-center">
                        <Image
                            alt={digimon.name}
                            className="object-cover rounded-xl max-h-[190px] w-[190px] h-[190px]"
                            src={digimon.image}
                        />
                    </div>
                </CardBody>
            </Card>
        </motion.div>
    );
};
