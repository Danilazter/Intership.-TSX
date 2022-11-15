import React from "react";
import styles from './pagination.module.css';


export interface IPagin {
    page: number;
    TotalPages: number;
    handlePagination: (page: number) => void;
    backgroundColor?: string;
}

export interface IPaginProps {
    pagin: IPagin[];

}


export const PaginationComponent: React.FC<IPagin> = ({
    page,
    TotalPages,
    handlePagination,
}) => {
    return (
        <div className={styles.pagination}>
            <div className={styles.paginationWrapper}>

                {/* {page === 0 && */}
                    <button
                        onClick={() => handlePagination(0)}
                        type="button"
                        className={`${styles.pageItem} `}
                    >
                        {0}
                    </button>
                {/* } */}
                
                {/* {page === 1 && */}
                    <button
                        onClick={() => handlePagination(1)}
                        type="button"
                        className={`${styles.pageItem} `}
                    >
                        {1}
                    </button>
                {/* } */}

                    <button
                        onClick={() => handlePagination(2)}
                        type="button"
                        className={`${styles.pageItem} + ' ' + ${[styles.active]}`}
                    >
                        {2}
                    </button>

                <button
                    onClick={() => handlePagination(3)}
                    type="button"
                    className={`${styles.pageItem} {[styles.active]: page === 3 }}`}
                >
                    {3}
                </button>

            </div>

        </div>
    );
};

export const Pagination = PaginationComponent;
