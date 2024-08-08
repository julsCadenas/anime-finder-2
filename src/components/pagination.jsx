import React from 'react';

const Pagination = ({ pageNum, setPageNum, lastVisiblePage }) => {
    const totalPages = lastVisiblePage;

    const handlePageChange = (num) => {
        if (num >= 1 && num <= totalPages) {
            setPageNum(num);
        }
    };

    const maxPagesToShow = 5;
    const startPage = Math.max(1, pageNum - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    const adjustedStartPage = Math.max(1, endPage - maxPagesToShow + 1);

    return (
        <nav aria-label="Page navigation" className="flex justify-center py-5 font-Montserrat">
            <ul className="inline-flex -space-x-px text-base">
                <li>
                    <button
                        onClick={() => handlePageChange(pageNum - 1)}
                        className={`flex items-center justify-center px-3 h-10 md:px-5 leading-tight border-t-2 border-e-0 font-semibold 
                            ${pageNum === 1 ? 'text-gray-400 border-gray-700 cursor-not-allowed opacity-50' : 'text-gray-500 border-gray-500 hover:border-neutral-50 hover:text-neutral-50'} `}
                        disabled={pageNum === 1}
                    >
                        Previous
                    </button>
                </li>
                {[...Array(endPage - adjustedStartPage + 1)].map((_, index) => {
                    const currentPage = adjustedStartPage + index;
                    const isActive = pageNum === currentPage;
                    return (
                        <li key={currentPage}>
                            <button
                                onClick={() => handlePageChange(currentPage)}
                                className={`flex items-center justify-center px-3 h-10 md:px-5 leading-tight border-t-2 
                                    ${isActive ? 'text-neutral-50 border-neutral-50 font-bold' : 'text-gray-500 border-gray-500 bg-black hover:border-neutral-50 hover:text-neutral-50 font-medium'}` }
                            >
                                {currentPage}
                            </button>
                        </li>
                    );
                })}
                <li>
                    <button
                        onClick={() => handlePageChange(pageNum + 1)}
                        className={`flex items-center justify-center px-3 h-10 md:px-5 leading-tight border-t-2 border-gray-500 font-semibold
                            ${pageNum === totalPages ? 'text-gray-400 border-gray-700 cursor-not-allowed opacity-50' : 'text-gray-500 hover:border-neutral-50 hover:text-neutral-50'} `}
                        disabled={pageNum === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
