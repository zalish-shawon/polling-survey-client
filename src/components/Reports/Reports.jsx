/* eslint-disable react/no-unknown-property */
import { Button, Modal } from 'flowbite-react';
import { useContext, useState } from 'react';
import useAxiosURL from '../../hooks/UseaxiosURL';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../provider/AuthProvider';
const Reports = () => {
    const [openModal, setOpenModal] = useState(false);
    const axiosUrl = useAxiosURL();
    const {user} = useContext(AuthContext)

    const { data: surveys = [] } = useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const res = await axiosUrl.get('/surveys');
            return res.data
        }
    })
    const unpublishedMessage = surveys.filter(item => item.surveyOwner === user?.email);
    console.log(unpublishedMessage);


    return (

        <div>
            <div>
                <Button color='white' onClick={() => setOpenModal(true)}>


                    <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Messages
                        <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                            {unpublishedMessage.length}
                        </span>
                    </button>


                </Button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>All Messages</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">

                            {
                                unpublishedMessage.length === 0 ?
                                <h1 className='text-center font-semibold'>No Message Found</h1>
                                :
                                unpublishedMessage.map(report => <div key={report._id}>
                                    <a href="#" class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                                        
                                        <p class="font-bold text-red-700 dark:text-red-400">Message {report.message}</p>
                                    </a>
                                </div>)
                            }

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setOpenModal(false)}>Close</Button>

                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Reports;