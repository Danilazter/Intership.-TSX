import React, { useState } from 'react'
import { Pagination } from './Pagination';



export const PaginationContainer = () => {

    const [page, setPage] = useState<number>(0);
    const TotalPages = 4;
    const handlePages = (updatePage: number) => setPage(updatePage);
    


    return (
        <div className='container'>
            <Pagination
                page={page}
                TotalPages={TotalPages}
                handlePagination={handlePages}
            />
        </div>
    );
};
