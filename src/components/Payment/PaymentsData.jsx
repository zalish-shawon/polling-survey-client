/* eslint-disable react/no-unknown-property */
import { useQuery } from "@tanstack/react-query";
import useAxiosURL from "../../hooks/UseaxiosURL";
import PaymentsDataTd from "./PaymentsDataTd";

const PaymentsData = () => {
    const axiosUrl = useAxiosURL();
    const { data: payments = [] } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosUrl.get('/payment')
            return res.data
        }
    })
    return (
        <div>
            <div>
                <h2 className="text-center font-bold text-5xl text-blue-400 mb-9 mt-10">All Payments</h2>
            </div>
            <div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                Transaction Id
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Time
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                           
                           {
                            payments.map(item => <PaymentsDataTd key={item._id} item={item}></PaymentsDataTd>)
                           }
                          
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default PaymentsData;