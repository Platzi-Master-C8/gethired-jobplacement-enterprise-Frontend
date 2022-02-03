import { useState, useEffect } from 'react';

import { scrollTop } from 'Components/JobOffers/helpers';
import Constants from 'Constants';

const usePagination = (dataArr, itemsPerPage = Constants.PerPage) => {
    const FirstPage = Constants.FirstEnumPage;
    const [currentPage, setCurrentPage] = useState(FirstPage);
    const [sliceData, setSliceData] = useState([]);

    const beginArr = (currentPage - 1) * itemsPerPage;
    const endArr = beginArr + itemsPerPage;

    const sliceArr = dataArr.slice(beginArr, endArr);

    useEffect(() => {
        setSliceData(sliceArr);
    }, [dataArr, beginArr, endArr]);

    const handleChange = (_, value) => {
        scrollTop();
        setCurrentPage(value);
    };

    return {
        sliceData,
        handleChange,
    };
};

export default usePagination;
