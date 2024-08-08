import React from 'react';

const Pagination = ({ anime, pageNum, setPageNum }) => {
    const totalPages = 5; 

    const handlePageChange = (num) => {
        if (num >= 1 && num <= totalPages) {
            setPageNum(num);
        }
    };

    return (
        <nav aria-label="Page navigation example" className="flex justify-center py-5">
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                    <button
                        onClick={() => handlePageChange(pageNum - 1)}
                        className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg ${pageNum === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100 hover:text-gray-700'} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                        disabled={pageNum === 1}
                    >
                        Previous
                    </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                    <li key={index + 1}>
                        <button
                            onClick={() => handlePageChange(index + 1)}
                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${pageNum === index + 1 ? 'bg-gray-200 text-gray-700' : 'hover:bg-gray-100 hover:text-gray-700'} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => handlePageChange(pageNum + 1)}
                        className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg ${pageNum === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100 hover:text-gray-700'} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
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
