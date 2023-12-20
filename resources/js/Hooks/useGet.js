import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Custom hook to perform a GET request using axios.
 * 
 * Este hook realiza una solicitud GET a la URL proporcionada y maneja los estados de datos, error y carga.
 * La solicitud se realiza automáticamente cuando cambia la URL.
 *
 * @param {string} url - La URL a la que se realizará la solicitud GET.
 * @returns {object} Un objeto que contiene los siguientes estados:
 * - `data`: Los datos obtenidos de la respuesta, `null` si no hay datos o si ocurre un error.
 * - `error`: El error capturado si la solicitud falla, `null` si no hay error.
 * - `loading`: Estado de carga, `true` mientras se realiza la solicitud y `false` una vez completada o fallida.
 */
export const useGet = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
};