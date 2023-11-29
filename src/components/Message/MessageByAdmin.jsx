/* eslint-disable react/no-unknown-property */
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import useAxiosURL from '../../hooks/UseaxiosURL';
import { useQuery } from '@tanstack/react-query';
const MessageByAdmin = () => {
    const [openModal, setOpenModal] = useState(false);
    const axiosUrl = useAxiosURL();

    const { data: reports = [] } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await axiosUrl.get('/reports');
            return res.data
        }
    })


    return (

        <div>
            <div>
                <Button color='white' onClick={() => setOpenModal(true)}>


                    <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Reports
                        <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-white bg-red-500 rounded-full">
                            {reports.length}
                        </span>
                    </button>


                </Button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>All reports</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">

                            {
                                reports.map(report => <div key={report._id}>
                                    <a href="#" class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                                        <h5 class="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white"><span className='text-gray-600'>Reporter name:</span> {report.reporterName}</h5>
                                        <h5 class="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white"><span className='text-gray-600'>Survey name:</span> {report.surveyName}</h5>
                                        <p class="font-bold text-red-700 dark:text-red-400">Report: {report.report}</p>
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

export default MessageByAdmin;