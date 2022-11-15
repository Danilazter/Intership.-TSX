import React, { useState } from 'react'
import { Pagination } from './Pagination';
import styles from './pagination.module.css'


const FADE_DURATION = 300;

export const PaginationContainer = () => {

    const [page, setPage] = useState<number>(0);
    const [active, setActive] = useState<'active' | 'pageItem'>('active')
    const TotalPages = 4;
    const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>();
    
    
    const handlePages = (move: number) => {
        const timer = setTimeout(() => {
            setPage(p => p + move);
            setActive('active');
        }, FADE_DURATION);
        clearTimeout(currentTimer)
        setActive('pageItem')
        setCurrentTimer(timer)
    }
    


    return (
        <div className='container'
            style={{ backgroundColor: `${styles.active}` }}>
            <Pagination
                page={page}
                TotalPages={TotalPages}
                handlePagination={handlePages}
            />
        </div>
    );
};
