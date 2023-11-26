/* eslint-disable react/no-unknown-property */
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosURL from "../../hooks/UseaxiosURL";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { AiFillDislike, AiFillLike } from "react-icons/ai";


const SurveysDetails = () => {
    const surveyData = useLoaderData();
    const { user } = useContext(AuthContext)
    const axiosUrl = useAxiosURL();
    const [vote, setVote] = useState('');
    const { _id, title, image, description, like, dislike } = surveyData;

    const { data: votes = [] } = useQuery({
        queryKey: ['votes'],
        queryFn: async () => {
            const res = await axiosUrl.get('/votes')
            return res.data;
        }
    })

    const findVoter = votes.filter(find => find.email === user?.email)
    console.log(findVoter.length);

    const handleVote = (e) => {
        e.preventDefault();
        const form = e.target
        const voteData = {
            surveyId: _id,
            vote,
            email: user.email,

        }

        try {
            axiosUrl.post("/votes", voteData)
                .then(res => {
                    if (res.data.insertedId) {
                        form.reset();
                        Swal.fire(
                            'Successfully voted your survey',
                            'success'
                        )
                    }
                })


        } catch (error) {
            console.log(error.message);
        }
    }

        const handleComment = (e) => {
            e.preventDefault();
            const form = e.target
            const comment = form.comment.value
            const commentData = {
                name: user.displayName,
                email: user.email,
                comment,
            }

            try {
                axiosUrl.post("/comments", commentData)
                    .then(res => {
                        if (res.data.insertedId) {
                            form.reset();
                            refetch();
                            Swal.fire(
                                'Comment added',
                                
                            )
                        }
                    })
    
    
            } catch (error) {
                console.log(error.message);
            }
        }


        const { data: comments = [], refetch } = useQuery({
            queryKey: ['comments'],
            queryFn: async () => {
                const res = await axiosUrl.get('/comments/')
                return res.data;
            }
        })






    return (
        <div>
            <div>
                <h2 className="mb-2 text-center text-5xl text-blue-400 mt-10">Details</h2>
            </div>
            <div>
                <div class="mx-auto px-4 max-w-[900px]">
                    <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
                        <div class="md:flex-shrink-0">
                            <img src={image} alt="mountains" class="w-full h-64 rounded-lg rounded-b-none" />
                        </div>
                        <span class="bg-red-100 mt-10 ml-4 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">{surveyData.category}</span>
                        <div className="ml-4 mt-3 flex justify-center">
                            <button type="button" class=" text-xl py-2.5 px-5 me-2 mb-2 font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">(0)<AiFillLike /></button>

                            <button type="button" class=" text-xl py-2.5 px-5 me-2 mb-2 font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">(0)<AiFillDislike /></button>

                        </div>
                        <div class="px-4 py-2 mt-2">
                            <h2 class="font-bold text-2xl text-gray-800 tracking-normal">{title}</h2>
                            <p class="text-sm text-gray-700 px-2 mr-1">
                                {description}
                            </p>

                            <form onSubmit={handleVote} action="">
                                <label for="countries" class="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Your Vote</label>
                                <select required name="vote" value={vote} onChange={(e) => setVote(e.target.value)} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choose a vote</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>

                                </select>


                                {
                                    findVoter.length >= 1 ?
                                        <h1 className="text-red-500 font-bold text-center p-4">User has already voted</h1>
                                        :
                                        <button type="submit" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5 w-full">Submit</button>
                                }


                            </form>


                        </div>

                    </div>

                </div>
                <div>
                    <h1 className="font-bold text-2xl text-center">Comment here</h1>
                    <div className="mt-2">
                       <form onSubmit={handleComment} action="">
                       <textarea name="comment" id="message" rows="4" class="block p-2.5 w-[900px] mx-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        <div className="flex justify-center mt-2">
                        <button type="submit" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add comment</button>
                        </div>
                       </form>

                    </div>
                </div>
                <div className="w-[900px] mx-auto">
                    {
                        comments.map(comment => 
                        <div key={comment._id}>
                            <h1 className="font-semibold"><span className="font-bold">Name:</span>  {comment.name} </h1>
                            <p><span className="font-bold">Comment:</span> {comment.comment}</p>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default SurveysDetails;

