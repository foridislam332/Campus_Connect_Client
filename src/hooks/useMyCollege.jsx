import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useMyCollege = () => {
    const { data: myCollegeData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['myCollegeData'],
        queryFn: async () => {
            const res = await useAxios('/my_college');
            return res.data;
        },
    });

    return [myCollegeData, loading, refetch];
};

export default useMyCollege;