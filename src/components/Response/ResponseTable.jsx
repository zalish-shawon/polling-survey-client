/* eslint-disable react/no-unknown-property */

import { useQuery } from "@tanstack/react-query";
import useAxiosURL from "../../hooks/UseaxiosURL";
import ResponseTd from "./ResponseTd";

const ResponseTable = () => {
    const axiosUrl = useAxiosURL();
    const {data: responseSurvey = []} =useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const res = await axiosUrl.get('/votes')
            return res.data;
        } 
    })



    return (
        <div>
            <div>
                <h2 className="text-center font-bold text-5xl text-blue-400 mt-10">Survey Response</h2>
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
                                    Responder Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Votes
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Time
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                           {
                            responseSurvey.map(item => <ResponseTd key={item._id} item={item}></ResponseTd> )
                           }
                          
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ResponseTable;