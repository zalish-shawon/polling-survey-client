/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Link } from 'react-router-dom';

const AllSurveysTd = ({ item }) => {
    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.title}
            </th>
            <td class="px-6 py-4">
                {item.category}
            </td>
            <td class="px-6 py-4">
                {item.yesVotes}
            </td>
            <td class="px-6 py-4">
                {item.noVotes}
            </td>
            <td class="px-6 py-4">
                <Link to={`/dashboard/updateSurvey/${item._id}`}>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
                </Link>

            </td>
        </tr>

    );
};

export default AllSurveysTd;