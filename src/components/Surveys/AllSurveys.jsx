/* eslint-disable react/no-unknown-property */

import useSurveys from "../../hooks/useSurveys";
import AllSurveysTd from "./AllSurveysTd";

const AllSurveys = () => {
    const [surveys,refetch] = useSurveys();


    return (
        <div>
            <div>
                <h2 className="text-center text-4xl font-semibold text-blue-400 mt-10">All Surveys</h2>
            </div>
            <div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="pb-4 bg-white dark:bg-gray-900">
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative mt-1">
                            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="table-search" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                        </div>
                    </div>
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                
                                <th scope="col" class="px-6 py-3">
                                    Survey Title
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                   Yes Votes
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    No Votes
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                           
                           {
                            surveys.map(item => <AllSurveysTd key={item._id} refetch={refetch} item={item}></AllSurveysTd>)
                           }
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllSurveys;