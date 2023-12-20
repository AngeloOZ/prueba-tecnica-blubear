import React, { useState } from "react";
import { motion } from "framer-motion";
import { DigimonCard, DigimonPopUp } from ".";

/**
 * Componente React para visualizar un conjunto de Digimons.
 *
 * Este componente recibe un array de Digimons y los muestra en una cuadrícula de tarjetas. Al seleccionar 
 * una tarjeta, se muestra un modal con más detalles sobre el Digimon seleccionado.
 *
 * @param {object[]} digimons - Un array de objetos Digimon que serán mostrados. Cada objeto debe contener
 *                              las propiedades necesarias para ser mostrado en una `DigimonCard`.
 * @returns Elemento JSX del componente.
 */
export const ContainerDigimons = ({ digimons }) => {
    const [selectedDigimon, setSelectedDigimon] = useState(null);

    const setDigimonModal = (digimon) => {
        setSelectedDigimon(digimon);
    };

    return (
        <motion.div layout>
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                {digimons.map((digimon) => (
                    <DigimonCard
                        key={digimon.id}
                        setSelectedDigimon={setDigimonModal}
                        digimon={digimon}
                    />
                ))}
            </div>

            {selectedDigimon && (
                <DigimonPopUp
                    digimon={selectedDigimon}
                    onClose={() => setSelectedDigimon(null)}
                />
            )}
        </motion.div>
    );
};
