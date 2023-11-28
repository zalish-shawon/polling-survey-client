/* eslint-disable react/no-unknown-property */
import { useLoaderData } from "react-router-dom";
import useAxiosURL from "../../hooks/UseaxiosURL";
import Swal from "sweetalert2";

const SurveyEdit = () => {
    const surveyData = useLoaderData();
    const axiosUrl = useAxiosURL();
    const {title, category, description, image, _id} = surveyData;

    const handleEditSurvey = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.name.value;
        const category = form.category.value;
        const image = form.image.value;
        const description = form.description.value;

        const surveyUpdateData = {
            title,
            category,
            image,
            description,  
        }

         axiosUrl.put(`/surveys/${_id}`, surveyUpdateData)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0) {
                Swal.fire(
                    'Good job!',
                    'Survey updated successfully',
                    'success'
                  )
            }
        } )

    }
    
    return (
        <div>
            <div>
                <h2 className="text-center text-4xl font-semibold text-blue-400 mt-10">Update Survey</h2>
            </div>
            <div>
                <section class="bg-white dark:bg-gray-900">
                    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">

                        <form onSubmit={handleEditSurvey} action="#">
                            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div class="sm:col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Survey Name</label>
                                    <input defaultValue={title} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type survey name" required="" />
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Survey Category</label>
                                    <input defaultValue={category} type="text" name="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Survey ImageURL</label>
                                    <input defaultValue={image} type="text" name="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea defaultValue={description} id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                                </div>
                            </div>
                            <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                Update Survey
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SurveyEdit;