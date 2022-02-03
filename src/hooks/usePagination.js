import { useState, useEffect } from 'react';
import { scrollTop } from '../components/JobOffers/helpers';

const usePagination = (dataArr, itemsPerPage = 10) => {
    const FirstPage = 1;
    const [currentPage, setCurrentPage] = useState(FirstPage);

    const beginArr = (currentPage - 1) * itemsPerPage;
    const endArr = beginArr + itemsPerPage;

    const sliceArr = [...dataArr]?.slice(beginArr, endArr);
    const [sliceData, setSliceData] = useState(sliceArr);

    useEffect(() => {
        setSliceData(sliceArr);
    }, [dataArr, beginArr, endArr]);

    const handleChange = (_, value) => {
        scrollTop();
        setCurrentPage(value);
    };

    const jump = (page) => {
        const pageNumber = Math.max(FirstPage, page);
        setCurrentPage(Math.min(pageNumber, page));
    };

    return {
        sliceData,
        handleChange,
        jump,
    };
};

export default usePagination;
