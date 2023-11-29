import React from 'react';
import useAxiosURL from './UseaxiosURL';
import { useQuery } from '@tanstack/react-query';

const useSurveys = () => {
    const axiosUrl = useAxiosURL();
    const {data: surveys = [], refetch} =useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const res = await axiosUrl.get('/surveys')
            return res.data;
        } 
    })
    return [surveys, refetch]
};

export default useSurveys;