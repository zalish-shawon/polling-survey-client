/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Button, Modal } from "flowbite-react";
import useAxiosURL from "../../hooks/UseaxiosURL";
import { useQuery } from "@tanstack/react-query";

const Feedback = ({ openModal, setOpenModal, feedbackData }) => {

    const axiosUrl = useAxiosURL();
    const { data: comments = [] } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await axiosUrl.get('/comments')
            return res.data
        }
    })

    const individualFeedback = comments.filter(item => item.surveyId === feedbackData);
    // console.log(individualFeedback);

    return (
        <div>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Body>

                    {
                        individualFeedback.length === 0 ?
                        <h1 className="text-center font-semibold">No Comments Found</h1>
                        :
                        individualFeedback.map(item => <div className="mb-2 flex justify-center" key={item._id}>
                            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400">{item.comment}</p>
                            </a>
                        </div>)
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button color="green" onClick={() => setOpenModal(false)}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Feedback;