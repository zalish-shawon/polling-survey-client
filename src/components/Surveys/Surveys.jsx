import { useQuery } from "@tanstack/react-query";
import useAxiosURL from "../../hooks/UseaxiosURL";
import SurveysCard from "./SurveysCard";

const Surveys = () => {
    const axiosUrl = useAxiosURL();
    const {data: surveys = []} =useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const res = await axiosUrl.get('/surveys')
            return res.data;
        } 
    })

    return (
        <div>
            <div>
                <h2 className="text-center text-5xl text-blue-400 mt-10">Polling and Surveys</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 p-10 max-w-[1300px] mx-auto">
                {
                    surveys.map(item => <SurveysCard key={item._id} item={item}></SurveysCard>)
                }
            </div>
        </div>
    );
};

export default Surveys;