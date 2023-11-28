/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import moment from 'moment';

const PaymentsDataTd = ({ item }) => {
    const dates = moment(item.date).format('MMMM Do YYYY, h:mm a');

    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
            </th>
            <td cscope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.email}
            </td>
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.transactionId}
            </td>
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {dates}
            </td>

        </tr>
    );
};

export default PaymentsDataTd;