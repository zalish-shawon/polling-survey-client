import { useLoaderData } from "react-router-dom";

const SurveyEdit = () => {
    const surveyData = useLoaderData();
    
    return (
        <div>
            <div>
                <h2 className="text-center text-4xl font-semibold text-blue-400 mt-10">Update Survey</h2>
            </div>
        </div>
    );
};

export default SurveyEdit;