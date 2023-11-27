/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import Swal from "sweetalert2";
import useAxiosURL from "../../../hooks/UseaxiosURL";

const UsersTd = ({user, refetch}) => {
    const {_id,name, email, image, role} = user;
    const axiosUrl = useAxiosURL();

    const adminRole = {
        role: 'admin',
    }
    const surveyorRole = {
        role: 'surveyor',
    }
    const handleAdminRole = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make Admin"
          }).then((result) => {
            if (result.isConfirmed) {
            axiosUrl.patch(`/users/${id}`, adminRole)
              Swal.fire({
                title: "Success!",
                text: "Role made Admin successfully",
                icon: "success"
              });
              refetch();
            }
          });
    }

    const handleSurveyorRole = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make surveyor"
          }).then((result) => {
            if (result.isConfirmed) {
            axiosUrl.patch(`/users/${id}`, surveyorRole)
            
              Swal.fire({
                title: "Success!",
                text: "Role made surveyor successfully",
                icon: "success"
              });
              refetch();
            }
          });
     }


    return (
       
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src={image} alt="Jese image" />
                    <div class="ps-3">
                        <div class="text-base font-semibold">{name}</div>
                        
                    </div>
                </th>
                <td class="px-6 py-4">
                    {email}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <p>{role}</p>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="relative inline-flex">
                    {
                        role === "admin"?
                        <button type="button" disabled class="text-gray-300 bg-white border border-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Admin</button>
                        :
                        <button onClick={() => handleAdminRole(_id)} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Admin</button>
                    }

                    {
                        role === 'surveyor'  ? 
                        <button type="button" disabled class="text-gray-300 bg-white border border-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Surveyor</button>
                        
                        :
                        <button onClick={() => handleSurveyorRole(_id)} type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Surveyor</button>
                    }

                    </div>
                </td>
            </tr>
        
    );
};

export default UsersTd;