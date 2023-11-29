/* eslint-disable react/no-unknown-property */

import { useContext } from "react";
import useSurveys from "../../hooks/useSurveys";
import AllSurveysTd from "./AllSurveysTd";
import { AuthContext } from "../../provider/AuthProvider";

const AllSurveys = () => {
    const [surveys,refetch] = useSurveys();
    const {user} = useContext(AuthContext);
    

    return (
        <div>
            <div>
                <h2 className="text-center text-4xl font-semibold mb-10 text-blue-400 mt-10">All Surveys</h2>
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