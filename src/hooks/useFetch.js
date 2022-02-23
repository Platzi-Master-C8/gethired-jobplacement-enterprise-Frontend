import { useState, useEffect } from 'react';

const useFetch = (callback) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const listData = await callback();
            setData(listData);
        } catch {
            setError('Ups!! There is an error!');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { loading, error, data };
};

export default useFetch;
