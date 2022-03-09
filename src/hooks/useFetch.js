import { useState } from 'react';

const useFetch = (callback) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const fetchData = async (filters) => {
        setLoading(true);
        try {
            const listData = await callback(filters);
            setData(listData);
        } catch {
            setError('Ups!! There is an error!');
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, data, fetchData };
};

export default useFetch;
