/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

const SurveysCard = ({item}) => {

    const {yesVotes, noVotes} = item
    const totalVotes = yesVotes + noVotes

    return (
        <div>
            <div class="max-w-sm h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a >
                    <img class="rounded-t-lg w-full h-[200px]" src={item.image} alt="" />
                </a>
                <div class="p-5">
                
                    <a >
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                    </a>
    
                    
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description.slice(0,150)}</p>
                    <p class="mb-3 text-red-500 font-semibold dark:text-gray-400">Total Votes: {totalVotes} </p>
                    <div className="flex justify-between">
                    <div>
                    <Link to={`/details/${item._id}`}>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Vote Now
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    </Link>
                    </div>
                <div>
                <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{item.category}</span>

                </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SurveysCard;