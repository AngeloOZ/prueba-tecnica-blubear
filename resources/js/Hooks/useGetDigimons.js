import axios from 'axios';
import { useState } from 'react'

/**
 * Custom hook for fetching Digimon data from an API.
 * 
 * Este hook proporciona una función para obtener datos de Digimon desde una API específica. La función 
 * `getDigimons` puede ser llamada con un número de página para obtener una lista paginada de Digimons.
 * Maneja internamente los estados de carga y errores.
 *
 * @returns {object} Un objeto que contiene:
 * - `getDigimons`: Una función que acepta un número de página (`currentPage`) como parámetro. 
 *                  Retorna los datos de Digimon para esa página específica. Si no se especifica una 
 *                  página, por defecto solicita la primera página.
 * - `error`: Un estado booleano que indica si ocurrió un error durante la última llamada a `getDigimons`.
 * - `isLoading`: Un estado booleano que indica si se está realizando una solicitud a la API.
 */

export const useGetDigimons = () => {
    const pageSize = 20;

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    const getDigimons = async (currentPage = 1) => {
        try {
            const { data } = await axios.get(`https://digi-api.com/api/v1/digimon?pageSize=20&page=${currentPage - 1}`)
            return data;
        } catch (error) {
            setError(true)
        } finally {
            setIsLoading(false)
        }
    }

    return { getDigimons, error, isLoading }
}
