import { useMemo, useState } from 'react';

const useSearch = (data) => {
    const [query, setQuery] = useState('');
    const [filteredSearch, setFilteredSearch] = useState(data);

    useMemo(() => {
        const resultData = data?.filter((item) => {
            const filter = item.name.toLowerCase().includes(query.toLowerCase());
            if (query.length >= 3) {
                return filter;
            }
            return data;
        });
        setFilteredSearch(resultData);
    }, [data, query]);

    return {
        setQuery,
        filteredSearch,
        query,
    };
};

export default useSearch;
