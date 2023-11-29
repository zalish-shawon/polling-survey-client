/* eslint-disable react/no-unknown-property */

import SurveysCard from "./SurveysCard";
import useSurveys from "../../hooks/useSurveys";
import { useState } from "react";

const Surveys = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [surveys] = useSurveys();
    const publishedSurvey = surveys.filter(item => item.status !== 'unpublished');

    const filteredUsers = publishedSurvey.filter(user =>
        user.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.category.toLowerCase().includes(searchQuery.toLowerCase())
     );
    return (
        <div>
            <div>
                <h2 className="text-center text-5xl text-blue-400 mt-10">Polling and Surveys</h2>
            </div>
            <div class="flex items-center justify-center flex-column flex-wrap md:flex-row space-y-4 lg:space-y-0 mt-10 dark:bg-gray-900">

                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for category,title" />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-10 max-w-[1300px] mx-auto">
                {
                    filteredUsers.map(item => <SurveysCard key={item._id} item={item} ></SurveysCard>)
                }
            </div>
        </div>
    );
};

export default Surveys;