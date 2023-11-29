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
                <h2 className="text-center font-bold text-5xl mb-10 text-blue-400 mt-10">Survey Response</h2>
            </div>
            <div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                   
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