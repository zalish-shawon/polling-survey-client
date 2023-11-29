/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { useContext, useState } from 'react';
import Feedback from './Feedback';
import { AiFillEdit, AiFillMessage } from 'react-icons/ai';
import { MdUnpublished } from "react-icons/md";
import useAxiosURL from '../../hooks/UseaxiosURL';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import useUsers from '../../hooks/useUsers';



const AllSurveysTd = ({ item, refetch }) => {
    const axiosUrl = useAxiosURL();
    const [openModal, setOpenModal] = useState(false);
    const [feedbackData, setFeedbackData] = useState(''); // Set initial feedback data
    const {user} = useContext(AuthContext)
    const admin = useUsers();

    const isAdmin = admin.find(item => item.email === user?.email && item.role === 'admin');

    const handleFeedbackClick = (data) => {
        setFeedbackData(data);
        setOpenModal(true);
      };

      const handleUnpublised = (id) => {
            const unpublishedData = {
                surveyId: item._id,
                surveyName: item.title,
                surveyOwner: item.email,
                message: "your data is not ok.survey has been unpublished",
                status: 'unpublished',

            }
            axiosUrl.patch(`/surveys/${id}`, unpublishedData)
            .then(res => {
                if(res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Unpublished this survey',
                        'success'
                      )
                      refetch();
                }
            })
      }

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
                <div className='flex items-center gap-1'>
                <Link to={`/dashboard/updateSurvey/${item._id}`}>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-[19px] py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><AiFillEdit></AiFillEdit></button>
                </Link>
                
                <Button onClick={() => handleFeedbackClick(item._id)}><AiFillMessage></AiFillMessage></Button>
                {
                   isAdmin && item.status === 'unpublished'?
                    <button disabled onClick={()=> handleUnpublised(item._id)} type="button" class="text-white bg-gray-300   font-medium rounded-lg text-base px-[19px] py-2.5 focus:outline-none "><MdUnpublished></MdUnpublished></button>
                     : isAdmin &&
                    <button onClick={()=> handleUnpublised(item._id)} type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-[19px] py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"><MdUnpublished></MdUnpublished></button>
                }
                </div>

               
                <Feedback openModal={openModal} setOpenModal={setOpenModal} feedbackData={feedbackData}></Feedback>

            </td>
        </tr>

    );
};

export default AllSurveysTd;