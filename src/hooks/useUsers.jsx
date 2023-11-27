import { useQuery } from "@tanstack/react-query";
import useAxiosURL from "./UseaxiosURL";

const useUsers = () => {
    const axiosUrl = useAxiosURL();
    const { data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosUrl.get('/users')
            return res.data
        }
    })
    return users;
};

export default useUsers;