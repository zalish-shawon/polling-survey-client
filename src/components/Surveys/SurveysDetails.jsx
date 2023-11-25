/* eslint-disable react/no-unknown-property */
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosURL from "../../hooks/UseaxiosURL";
import Swal from "sweetalert2";

const SurveysDetails = () => {
    const surveyData = useLoaderData();
    const {user} = useContext(AuthContext)
    const axiosUrl = useAxiosURL();
    const [vote, setVote] = useState('');
    const {_id, title, image, description, like, dislike } = surveyData;

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
          .then( res => {
              if(res.data.insertedId) {
                  form.reset();
                  Swal.fire(
                      'Successfully voted your survey',
                      'success'
                    )
              }
          })
            
            
          }catch (error) {
              console.log(error.message);
          }

    }
    return (
        <div>
            <div>
                <h2 className="text-center text-5xl text-blue-400 mt-10">Details</h2>
            </div>
            <div class="mx-auto px-4 py-8 max-w-xl">
                <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
                    <div class="md:flex-shrink-0">
                        <img src={image} alt="mountains" class="w-full h-64 rounded-lg rounded-b-none" />
                    </div>
                    <div class="px-4 py-2 mt-2">
                        <h2 class="font-bold text-2xl text-gray-800 tracking-normal">{title}</h2>
                        <p class="text-sm text-gray-700 px-2 mr-1">
                            {description}
                        </p>

                        <form onSubmit={handleVote} action="">
                        <label for="countries" class="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Your Vote</label>
                        <select name="vote" value={vote} onChange={(e) => setVote(e.target.value)} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a vote</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                        </select>
                        <button type="submit" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5 w-full">Submit</button>

                        </form>
                        



                    </div>

                </div>


            </div>
        </div>
    );
};

export default SurveysDetails;